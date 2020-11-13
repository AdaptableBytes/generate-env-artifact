const fs = require('fs');

module.exports = function writeFile(filepath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filepath, content, 'utf8', (err) => {
      if (err) {
        return reject(err.message);
      }
      return resolve();
    });
  });
};
