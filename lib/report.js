/**
 * Generates a report detailing some basic statistics of the conversion.
 * @param {string} original - The original CSS content.
 * @param {string} processed - The processed (converted) CSS content.
 * @returns {object} - An object containing conversion statistics.
 */
export function generateReport(original, processed) {
    const originalLength = original.length;
    const processedLength = processed.length;
    const reduction = originalLength - processedLength;
    
    
    
    const propertiesChanged = (processed.match(/:/g) || []).length;
    
    return {
      originalLength,
      processedLength,
      reduction,
      propertiesChanged
    };
  }
  