const fs = require('node:fs');
const input = fs.readFileSync(__filename.replace('part2.js', 'input.txt')).toString().split("\n");

let position = 50;
let zeroes = 0;

input.forEach(line => {
    const negative = line.startsWith('L');
    const rotationCount = new Number(line.slice(1));
    initialPos = position;
    if(negative){
        position = position - rotationCount;
        while(position < 0){
            position += 100;
            zeroes += 1;
        }
        if(position == 0){
            zeroes += 1;
        }
        if(initialPos == 0){
            zeroes -= 1;
        }
    }else{
        position = position + rotationCount;
        while(position > 99){
            position -= 100;
            zeroes +=1;
        }
    }
});

console.log(zeroes);