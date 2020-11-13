const path = require('path');
const writeFile = require('../write-file');
const fileExists = require('../file-exists');
const deleteFile = require('../delete-file');

async function run() {
  const tmp = path.join(__dirname, 'tmp');
  await writeFile(tmp, '');
  let exists = await fileExists(tmp);
  if (exists === false) {
    throw Error('Unable to write file');
  }
  await deleteFile(tmp);
  exists = await fileExists(tmp);
  if (exists === true) {
    throw Error('Unable to delete file');
  }
}

run()
  .then(() => {
    console.log('done');
  })
  .catch((e) => {
    console.error(e);
  });
