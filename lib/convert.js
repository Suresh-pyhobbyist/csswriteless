/**
 * Escapes regex special characters in a string so it can be used in a RegExp constructor.
 * @param {string} string - The string to escape.
 * @returns {string} - The escaped string.
 */
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Expands abbreviated CSS property names to their full property names by inverting the mapping.
 * Longer abbreviations are processed before shorter ones to prevent overlapping matches.
 *  
 * For example, if your mapping contains:
 *   { "column-rule-color": "col-rl-clr", "color": "clr" }
 * then "col-rl-clr: yellow;" in your CSS will correctly become "column-rule-color: yellow;"
 * rather than "col-rl-color: yellow;".
 *
 * @param {string} css - The input CSS content.
 * @param {object} config - The configuration object containing a 'mappings' property.
 * @returns {string} - The converted CSS.
 */
export default function convertCSS(css, config) {
  const mappings = config.mappings || {};
  
  
  const reverseMapping = {};
  for (const fullName in mappings) {
    const abbreviation = mappings[fullName];
    reverseMapping[abbreviation] = fullName;
  }
  
  let output = css;
  
  Object.keys(reverseMapping)
    .sort((a, b) => b.length - a.length)
    .forEach(abbr => {
      const fullName = reverseMapping[abbr];
      
      const regex = new RegExp(escapeRegExp(abbr) + "(\\s*:)", "g");
      output = output.replace(regex, fullName + "$1");
    });
  
  return output;
}
