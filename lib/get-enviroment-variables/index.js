function isPrefixMatch(key, prefixes) {
  const ucase = key.toUpperCase();
  for (let x = 0; x < prefixes.length; x += 1) {
    if (ucase.startsWith(prefixes[x].toUpperCase())) {
      return true;
    }
  }
  return false;
}

module.exports = function getEnvironmentVariables(prefixes) {
  const envVariables = {};
  if (prefixes && Array.isArray(prefixes)) {
    Object.keys(process.env).forEach(key => {
      if (isPrefixMatch(key, prefixes)) {
        envVariables[key] = process.env[key];
      }
    });
  }
  return envVariables;
};