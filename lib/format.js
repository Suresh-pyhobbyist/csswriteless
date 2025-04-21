/**
 * Minifies CSS by stripping out comments, extra whitespace, and unnecessary characters.
 * @param {string} css - The CSS content to minify.
 * @returns {string} - The minified CSS.
 */
export function minifyCSS(css) {
    let output = css.replace(/\/\*[\s\S]*?\*\//g, '');
    output = output.replace(/\s+/g, ' ');                
    output = output.replace(/\s*{\s*/g, '{')
                   .replace(/\s*}\s*/g, '}')
                   .replace(/\s*:\s*/g, ':')
                   .replace(/\s*;\s*/g, ';')
                   .replace(/;}/g, '}');                  
    return output.trim();
  }
  
  /**
   * Prettifies (beautifies) CSS by adding newlines and indentation.
   * Note: This is a basic implementation and may need enhancements for complex CSS.
   * @param {string} css - The CSS content to prettify.
   * @returns {string} - The prettified CSS.
   */
  export function prettifyCSS(css) {
    let formatted = css.replace(/}/g, '}\n')
                       .replace(/{/g, ' {\n')
                       .replace(/;/g, ';\n');
    formatted = formatted.replace(/\n\s*\n/g, '\n');
    return formatted.trim();
  }
  