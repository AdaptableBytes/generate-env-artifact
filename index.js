const path = require('path');
const render = require('stache-render');
const getArgs = require('command-line-args');
const fh = require('./lib/utilities/file-helper');


function getEnvironmentVarsByPrefix(key = '') {
  const uc = key.toUpperCase();
  if (uc.startsWith(PREFIX)) {
    return uc.substring(PREFIX.length, uc.length);
  }
  return null;
}

module.exports = async function generateEnvArtifact() {
  const options = [
    { name: 'template', alias: 't', type: String },
    { name: 'output', alias: 'o', type: String },
    { name: 'prefix', alias: 'p', type: String },
  ];
  const inputs = getArgs(options);
  console.log(inputs);

  return;

  const envVariables = {};

  Object.keys(process.env).forEach(key => {
    const v = getCloudflareVar(key);
    if (v !== null) {
      envVariables[v] = process.env[key];
    }
  });
  if (Object.keys(envVariables).length > 0) {
    const filepath = path.join('deploy', 'targets', 'cloudflare', 'wrangler.toml.mustache');
    let content = null;
    try {
      content = await render({src: filepath }, envVariables);
    } catch(e) {
      console.error(e);
      process.exit(2);
    }

    const output = path.join('wrangler.toml');
    await FileHelper.writeFile(output, content);
    const result = await FileHelper.fileExists(output);
    if (result === true) {
      return process.exit(0);
    }
    console.error('Failed to create wrangler.toml file');
    return process.exit(1);
  }
  return;
};
