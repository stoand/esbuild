let offsetsCovered = new Set();

function __INST(offset, expr) {
    offsetsCovered.add(offset);
    return expr;
}

global.__INST = __INST;

require('./out.js');

console.log('offsets covered:', offsetsCovered);

