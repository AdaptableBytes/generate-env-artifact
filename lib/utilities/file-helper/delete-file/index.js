const fs = require('fs').promises;
const fileExists = require('../file-exists');

module.exports = async function deleteFile(filepath) {
  const exists = await fileExists(filepath);
  if (exists === true) {
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    await fs.unlink(filepath);
  }
};
