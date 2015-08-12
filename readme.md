# normalize-array-number

normalize a numeric prop in an array between 0:100

## Installation

```bash
npm install --save normalize-array-number
```

## How it works

Given an array of objects, normalize a numeric property
of each object between 0 and 100.

E.g.: `[{n:2}, {n:4}, {n:0}] => [{n:50}, {n:100}, {n:0}]`



## Usage

```javascript
  import normalize from 'normalize-array-number';
  const arr = [{n:2}, {n:4}, {n:0}];
  const result = normalize(arr, 'n');
  // result = [{n:50}, {n:100}, {n:0}
```

## API

`normalize(arr, options)`

* arr: [REQUIRED] array of objects to normalize
* options: [REQUIRED] either a string with the name of the property to normalize, or
  an object containing these properties:

  * prop: [REQUIRED] name of the property to normalize
  * min: value to assign to the minimum value encountered
  * max: value to assign to the maximum value encountered

## License

The MIT License (MIT)
Copyright (c) 2015 Andrea Parodi



