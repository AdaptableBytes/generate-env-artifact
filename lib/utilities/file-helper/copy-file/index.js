const fs = require('fs');
const fileExists = require('../file-exists');

function copy(src, target) {
  return new Promise((resolve, reject) => {
    fs.copyFile(src, target, (err) => {
      if (err && err !== null) {
        console.error(err);
        return resolve(false);
      }
      return resolve(true);
    });
  });
}

module.exports = async function copyFile(src, target) {
  const exists = await fileExists(src);
  if (exists === true) {
    return await copy(src, target);
  }
  return false;
};