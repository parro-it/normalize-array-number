const defaults = {
  min: 0,
  max: 100,
  round: false
};

export default function normalizeArrayNumber(arr, prop) {
  let options;
  if (typeof prop === 'string') {
    options = Object.assign({}, defaults, {prop});
  } else {
    options = Object.assign({}, defaults, prop);
  }

  // collect min and max value
  let min = null;
  let max = null;

  for (let obj of arr) {
    const value = obj[options.prop];
    if ( min === null || value < min ) {
      min = value;
    }
    if ( max === null || value > max) {
      max = value;
    }
  }

  const range = max - min;
  const newRange = options.max - options.min;

  for (let obj of arr) {
    let value = obj[options.prop];
    value = ((value - min) / range) * newRange + options.min;
    if (typeof options.round === 'number') {
      const factor = Math.pow(10, options.round);
      value = Math.round( value * factor ) / factor;
    }
    obj[options.prop] = value;
  }
  return arr;
}
