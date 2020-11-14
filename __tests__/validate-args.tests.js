const validateArgs = require('../lib/validate-args');

test('Throws error on missing argument', () => {
  expect(() => {
    throw Error('Boom');
  }).toThrow();
});

test('Throws error on missing argument', () => {
  expect(() => {
    validateArgs();
  }).toThrow('Arguments cannot be null or empty');
});

test('Throws error on missing template argument', () => {
  expect(() => {
    validateArgs({});
  }).toThrow('"--template" argument expected');
});

test('Throws error on missing output argument', () => {
  expect(() => {
    validateArgs({template: 'a'});
  }).toThrow('"--output" argument expected');
});

test('Throws error on missing output argument', () => {
  expect(() => {
    validateArgs({
      template: 'a',
      output: {}
    });
  }).toThrow('Output filepath must be type String');
});

test('Throws error on missing prefix argument', () => {
  expect(() => {
    validateArgs({
      template: 'a',
      output: 'b'
    });
  }).toThrow('"--prefix" argument expected');
});