let fs = require('fs');

let out = fs.readFileSync('./out.js', { encoding: 'utf8' })

let offsetsCovered = [ [0, out.split('').length ] ];

function __INST(start, end, expr = undefined) {
    offsetsCovered.push([start, end]);
    return expr;
}

global.__INST = __INST;

function findInstumentedItems(source) {
    let items = source.matchAll(/__INST\((\d+), (null|\d+)/g);

    let matches = [];
    for (let item of items) {
        let start = Number(item[1]);
        let end = item[2] == 'null' ? null : Number(item[2]);
        
        matches.push([start, end]);
    }
    
    return matches;
}

Function(out)()

console.log('offsets covered:', offsetsCovered);

console.log('all instrumented', findInstumentedItems(out));
