const fs = require('node:fs');
const input = fs.readFileSync(__filename.replace('part1.js', 'input.txt')).toString().split("\n");

let position = 50;
let zeroes = 0;

input.forEach(line => {
    const negative = line.startsWith('L');
    const rotationCount = new Number(line.slice(1));
    if(negative){
        position = position - rotationCount;
        while(position < 0){
            position += 100;
        }
    }else{
        position = position + rotationCount;
        while(position > 99){
            position -= 100;
        }
    }
    if(position == 0){
        zeroes += 1;
    }
});

console.log(zeroes);