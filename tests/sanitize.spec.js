import test from 'ava';
import sanitize from '../src/sanitize.js';

test('should remove lines starting with "#"', t => {
  t.is(sanitize("some value\n# some comment"), "some value\n");
  t.is(sanitize("some value\n#some comment"), "some value\n");
  t.is(sanitize("some value\n#some comment\n#some comment"), "some value\n\n");
});

test('should remove lines starting with "<"', t => {
  t.is(sanitize("some value\n< some comment"), "some value\n");
});

test('should remove lines starting with a space', t => {
  t.is(sanitize("some value\n some comment"), "some value\n");
});


test('should remove blank lines', t => {
  t.is(sanitize("some value\n\n\n\n"), "some value\n");
});