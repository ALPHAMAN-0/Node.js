'use strict';

function buildMessages() {
  return [
    'Hello, World!',
    'This is a sample Node.js application.',
    'It demonstrates basic Node.js functionality.',
  ];
}

module.exports = { buildMessages };

if (require.main === module) {
  for (const line of buildMessages()) {
    console.log(line);
  }
}
