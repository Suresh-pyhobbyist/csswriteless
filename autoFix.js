/**
 * Attempts to auto-fix common CSS mistakes, such as missing semicolons
 * and common misspellings of CSS property names.
 * @param {string} css - The CSS content to auto-fix.
 * @returns {string} - The CSS with fixes applied.
 */
export function autoFixCSS(css) {
  
  let fixed = css;
  
  
  fixed = fixed.replace(/border-righeight/gi, "border-right-width");
  fixed = fixed.replace(/font-weigheight/gi, "font-weight");
  fixed = fixed.replace(/line-heigheight/gi, "line-height");
  fixed = fixed.replace(/margin-righeight/gi, "margin-right");
  fixed = fixed.replace(/max-heigheight/gi, "max-height");
  fixed = fixed.replace(/min-heigheight/gi, "min-height");
  fixed = fixed.replace(/padding-righeight/gi, "padding-right");
  
  fixed = fixed.replace(/\brigheight\b/gi, "right");

  
  const lines = fixed.split('\n');
  const fixedLines = lines.map(line => {
    const trimmed = line.trim();
    
    if (
      trimmed.length === 0 ||
      trimmed.startsWith('/*') ||
      trimmed.startsWith('@') ||
      trimmed.endsWith('{') ||
      trimmed.endsWith('}') ||
      trimmed.endsWith(';')
    ) {
      return line;
    }
    
    if (trimmed.includes(':') && !trimmed.endsWith(';')) {
      return line + ';';
    }
    return line;
  });
  
  return fixedLines.join('\n');
}
