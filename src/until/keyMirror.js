export default obj => {
  if (
    !(obj instanceof Object && !Array.isArray(obj) && typeof obj === 'object')
  ) {
    throw new Error('keyMirror(...): Argument must be an object');
  }
  for (let key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }
    obj[key] = key;
  }
  return obj;
};
