#!/usr/bin/env node

import { program } from 'commander';
import fs from 'fs';
import chalk from 'chalk';
import path from 'path';
import { highlight } from 'cli-highlight';
import convertCSS from './lib/convert.js'; 
import watchFile from './lib/watch.js';
import { loadConfig } from './lib/config.js';
import { validateCSS } from './lib/validate.js';  
import { autoFixCSS } from './lib/autoFix.js';      
import { prettifyCSS, minifyCSS } from './lib/format.js'; 
import { generateReport } from './lib/report.js';   


program
  .version('2.0.0')
  .description('csswriteless is a CLI tool that simplifies your CSS workflow!')
  .option('-i, --input <inputFile>', 'Path to the input CSS file')
  .option('-d, --directory <directoryPath>', 'Path to a directory containing CSS/HTML/JSX/Vue files for batch processing')
  .option('-o, --output <outputFile>', 'Path to the output file (if omitted, prints to stdout)')
  .option('-w, --watch', 'Watch file or directory changes and auto-convert')
  .option('-c, --config <configFile>', 'Path to custom configuration file', 'config.json')
  .option('-v, --verbose', 'Enable verbose logging')
  .option('--minify', 'Minify the output CSS')
  .option('--pretty', 'Prettify (beautify) the output CSS')
  .option('--format <format>', 'Output format: css, json, scss or less', 'css')
  .option('--fix', 'Auto-fix common CSS mistakes (linting and corrections)')
  .option('--git-hook', 'Set up a sample git pre-commit hook configuration for CSS conversion automation');

program.parse(process.argv);
const options = program.opts();



const configData = loadConfig(options.config);

/**
 * Process CSS content:
 *   - Convert using the updated convertCSS function.
 *   - Optionally auto-fix mistakes.
 *   - Validate the result and log any warnings.
 *   - Format (minify or prettify) as requested.
 *
 * Returns the transformed CSS.
 */
async function processFileContent(inputCSS, fileName = 'stdin') {
  let transformedCSS;
  try {
    
    transformedCSS = convertCSS(inputCSS, configData);

    
    if (options.fix) {
      transformedCSS = autoFixCSS(transformedCSS);
    }

    
    const errors = validateCSS(transformedCSS, configData);
    if (errors.length > 0) {
      console.error(chalk.red(`Validation warnings/errors in "${fileName}":`));
      errors.forEach(err => console.error(chalk.red(`  • ${err}`)));
    }

    
    if (options.minify) {
      transformedCSS = minifyCSS(transformedCSS);
    } else if (options.pretty) {
      transformedCSS = prettifyCSS(transformedCSS);
    }
    return transformedCSS;
  } catch (err) {
    console.error(chalk.red(`Error processing "${fileName}": ${err.message}`));
    throw err;
  }
}

/**
 * Outputs the transformed CSS or report.
 * If JSON format is chosen, wraps it in a report generated from the conversion.
 * Otherwise, outputs plain text. When printing to stdout, highlights CSS syntax.
 */
function outputResult(result, originalContent = '', outFile = null) {
  let outputData = result;
  if (options.format.toLowerCase() === 'json') {
    
    const report = generateReport(originalContent, result);
    outputData = JSON.stringify(report, null, 2);
  }

  if (outFile) {
    fs.writeFileSync(outFile, outputData, 'utf8');
    if (options.verbose) {
      console.log(chalk.green(`File saved to ${outFile}`));
    }
  } else {
    
    if (['css', 'scss', 'less'].includes(options.format.toLowerCase())) {
      console.log(highlight(outputData, { language: 'css', ignoreIllegals: true }));
    } else {
      console.log(outputData);
    }
  }
}

/**
 * A simple parser to extract CSS code from HTML/JSX/Vue files.
 * (This is a naive implementation; a proper parser is recommended in production.)
 */
function extractCSS(content) {
  const matches = content.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
  return matches ? matches[1] : content;
}

/**
 * Main function: Handles processing for a single file, batch (directory), or STDIN.
 */
async function main() {
  
  let overallReport = { convertedFiles: 0, totalPropertiesChanged: 0, errors: [] };

  if (options.directory) {
    
    const allowedExtensions = ['.css', '.html', '.jsx', '.vue'];
    const files = fs.readdirSync(options.directory).filter(file =>
      allowedExtensions.includes(path.extname(file).toLowerCase())
    );

    for (const fileName of files) {
      const filePath = path.join(options.directory, fileName);
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        
        const cssContent = path.extname(fileName).toLowerCase() !== '.css'
          ? extractCSS(content)
          : content;
        const processedCSS = await processFileContent(cssContent, fileName);
        
        const fileReport = generateReport(content, processedCSS);
        overallReport.convertedFiles++;
        overallReport.totalPropertiesChanged += fileReport.propertiesChanged || 0;
        
        const outputFilePath = filePath.replace(path.extname(filePath), `.converted${path.extname(filePath)}`);
        fs.writeFileSync(outputFilePath, processedCSS, 'utf8');
        if (options.verbose) {
          console.log(chalk.green(`Processed ${filePath} -> ${outputFilePath}`));
        }
      } catch (err) {
        overallReport.errors.push({ file: filePath, error: err.message });
        console.error(chalk.red(`Error processing ${filePath}: ${err.message}`));
      }
    }
    
    if (options.verbose || !options.output) {
      console.log(chalk.blue('Batch processing report:'), overallReport);
    }
    if (options.output) {
      fs.writeFileSync(options.output, JSON.stringify(overallReport, null, 2), 'utf8');
    }
  } else if (options.input) {
    
    fs.readFile(options.input, 'utf8', async (err, data) => {
      if (err) {
        console.error(chalk.red(`Error reading file "${options.input}": ${err.message}`));
        process.exit(1);
      }
      try {
        const result = await processFileContent(data, options.input);
        outputResult(result, data, options.output);
      } catch (conversionError) {
        console.error(chalk.red(`Conversion error: ${conversionError.message}`));
        process.exit(1);
      }
    });
  } else {
    
    let inputData = '';
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', chunk => {
      inputData += chunk;
    });
    process.stdin.on('end', async () => {
      try {
        const result = await processFileContent(inputData, 'stdin');
        outputResult(result, inputData, options.output);
      } catch (conversionError) {
        console.error(chalk.red(`Conversion error: ${conversionError.message}`));
        process.exit(1);
      }
    });
  }

  
  if (options.gitHook) {
    const gitHookContent = `
#!/bin/sh
# Sample pre-commit hook for CSS conversion automation
echo "Running CSS conversion pre-commit hook..."
# Adjust this command as needed for your project setup.
css-tool --input <file> --fix --verbose
RESULT=$?
[ $RESULT -ne 0 ] && exit 1
exit 0
    `.trim();
    const hookFile = path.join(process.cwd(), '.git', 'hooks', 'pre-commit');
    try {
      fs.writeFileSync(hookFile, gitHookContent, { mode: 0o755 });
      console.log(chalk.green(`Git pre-commit hook set up at ${hookFile}`));
    } catch (hookError) {
      console.error(chalk.red(`Error setting up git hook: ${hookError.message}`));
    }
  }
}


main();


if (options.watch) {
  const watchTarget = options.directory || options.input;
  if (!watchTarget) {
    console.error(chalk.red('No file or directory specified for watch mode.'));
    process.exit(1);
  }
  if (options.verbose) {
    console.log(chalk.blue(`Watching changes on: ${watchTarget}`));
  }
  watchFile(watchTarget, () => {
    if (options.verbose) {
      console.log(chalk.blue(`Change detected in ${watchTarget}. Reprocessing...`));
    }
    main();
  });
}
