const render = require("stache-render");
const getArgs = require("command-line-args");
const fh = require("./lib/utilities/file-helper");
const getEnvironmentVariables = require("./lib/get-enviroment-variables");
const validate = require("./lib/validate-args");

require("dotenv").config();

module.exports = async function generateEnvArtifact() {
  const options = [
    { name: "template", alias: "t", type: String },
    { name: "output", alias: "o", type: String },
    { name: "prefix", alias: "p", multiple: true, type: String },
  ];
  const inputs = getArgs(options);
  try {
    validate(inputs);
  } catch (e) {
    console.error(e.message);
    return process.exit(3);
  }

  const envVariables = getEnvironmentVariables(inputs.prefix);
  if (envVariables && Object.keys(envVariables).length === 0) {
    console.error("No matching enviroment variables for prefix");
    return process.exit(1);
  }

  let content = null;
  try {
    content = await render({ src: inputs.template }, envVariables);
  } catch (e) {
    console.error(e.message);
    return process.exit(2);
  }

  try {
    await fh.writeFile(inputs.output, content);
  } catch (e) {
    console.error(e.message);
    return process.exit(4);
  }
  const result = await fh.fileExists(inputs.output);
  if (result === true) {
    return process.exit(0);
  }
  console.error(`Failed to create output file ${inputs.output}`);
  return process.exit(1);
};
