module.exports = function validateArgs(options) {
  if (!options) {
    throw Error("Arguments cannot be null or empty");
  }

  if (Object.prototype.hasOwnProperty.call(options, "template") === false) {
    throw Error('"--template" argument expected');
  }

  if (Object.prototype.hasOwnProperty.call(options, "output") === false) {
    throw Error('"--output" argument expected');
  }

  if (
    Object.prototype.hasOwnProperty.call(options, "output") === true &&
    typeof options.output !== "string"
  ) {
    throw Error("Output filepath must be type String");
  }

  if (Object.prototype.hasOwnProperty.call(options, "prefix") === false) {
    throw Error('"--prefix" argument expected');
  }
};
