const getEnvironmentVariables = require('../lib/get-enviroment-variables');

test('Empty prefixes array should return no variables', async () => {
  const vars = await getEnvironmentVariables();
  expect(vars).toStrictEqual({});
});

test('"TEST" prefix should return variables', async () => {
  const vars = await getEnvironmentVariables(['TEST_']);
  expect(vars).toStrictEqual({'TEST_FOO': 'bar'});
});

test('"TEST" prefix should return variables', async () => {
  const vars = await getEnvironmentVariables(['TEST_']);
  expect(vars).toEqual({'TEST_FOO': 'bar'});
});

test('Multiple prefixes should return variables', async () => {
  const vars = await getEnvironmentVariables(['TEST_', 'FOO_']);
  expect(vars).toStrictEqual({'TEST_FOO': 'bar', FOO_FLUNK: 'flurm'});
});

test('Multiple prefixes should return variables', async () => {
  const vars = await getEnvironmentVariables(['TEST_', 'FOO_', 'doo_']);
  expect(vars).toStrictEqual({'TEST_FOO': 'bar', FOO_FLUNK: 'flurm', DOO_DUNK: 'Dopple'});
});