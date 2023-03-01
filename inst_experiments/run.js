let offsetsCovered = [];

function __INST(start, end, expr = undefined) {
    offsetsCovered.push([start, end]);
    return expr;
}

global.__INST = __INST;

require('./out.js');

console.log('offsets covered:', offsetsCovered);

