import fs from 'fs';

/**
 * Watches a file or directory for changes and triggers the callback whenever a change occurs.
 * @param {string} watchPath - The path to the file or directory to watch.
 * @param {Function} callback - The function to call when a change is detected.
 */
export default function watchFile(watchPath, callback) {
  try {
    fs.watch(watchPath, { recursive: true }, (eventType, filename) => {
      
      callback();
    });
  } catch (err) {
    console.error("Error watching file/directory:", err);
  }
}
