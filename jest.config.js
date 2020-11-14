const path = require('path');

const setup = path.join(process.cwd(), '.jest', 'setup');

module.exports = {
  setupFiles: [path.join(setup, 'set-env-vars.js')]
};