'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');

const { buildMessages } = require('../index.js');

test('buildMessages returns three greeting lines', () => {
  const messages = buildMessages();
  assert.ok(Array.isArray(messages), 'messages should be an array');
  assert.equal(messages.length, 3, 'messages should have 3 entries');
  assert.match(messages[0], /^Hello, World!$/);
  assert.match(messages[2], /basic Node\.js functionality/);
});

test('buildMessages entries are non-empty strings', () => {
  const messages = buildMessages();
  for (const m of messages) {
    assert.equal(typeof m, 'string');
    assert.ok(m.length > 0, 'message should not be empty');
  }
});
