/**
 * Performs a basic check on the CSS to verify that all curly braces are balanced.
 * @param {string} css - The CSS content to validate.
 * @returns {Array<string>} - An array of warning/error messages.
 */
export function validateCSS(css) {
    const errors = [];
    let openBraces = 0;
    for (let char of css) {
      if (char === '{') openBraces++;
      if (char === '}') openBraces--;
      if (openBraces < 0) {
        errors.push("Extra closing brace found.");
        break;
      }
    }
    if (openBraces > 0) {
      errors.push("Missing closing brace(s).");
    }
    return errors;
  }
  