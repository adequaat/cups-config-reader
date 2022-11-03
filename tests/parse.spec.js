import test from 'ava';
import parse from '../src/parse.js';

test('should parse propety and value seperated by whitespace', t => {
  t.deepEqual(parse("some value"), { some: 'value' });
});

test('should parse multiple propeties and values seperated by whitespace', t => {
  t.deepEqual(parse("some value\nBla at\nsome other value"), { some: 'value', Bla: 'at', some: 'other value' });
});
