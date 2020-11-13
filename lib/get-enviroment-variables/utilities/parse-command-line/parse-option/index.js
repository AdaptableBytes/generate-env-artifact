function formatKey(key) {
  let formatted = key;
  for (let x = 0; x < key.length; x += 1) {
    if (key[x] !== '-') {
      formatted = key.substring(x, key.length);
      break;
    }
  }
  return formatted;
}

module.exports = function parseOption(option) {
  if (typeof option !== 'string') {
    throw Error('Unexpected type');
  }
  if (option.indexOf('=') === -1) {
    return {
      key: option,
      val: true
    }
  }  
  for (let i = 0; i < option.length; i += 1) {
    if (option[i] === '=') {
      let val = null;
      const idx = i++;
      if (option.length > idx) {
        val = option.substring(i, option.length)
      } else {
        val = true;
      }
      let key = option.substring(0, i).toString();
      const formatted = formatKey(key);
      return {
        key: formatted,
        val,
      };
    }
  }
};