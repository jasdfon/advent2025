const readline = require('node:readline');

const startTime = Date.now();
let position = 50;
let silver = 0;
let gold = 0;

const rl = readline.createInterface({
  input: process.stdin
});

rl.on("line", line => {
    const negative = line.startsWith('L');
    if ( line.length < 2 ){
        console.log(line);
        line = line.charAt(0) + '00';
    }
    if ( line.length < 3 ){
        console.log(line);
        line = line.charAt(0) + '0' +  line.charAt(1);
    }
    const fullRotationCount = new Number(line.slice(1,-2));
    const positionMove = new Number(line.slice(-2));

    let initialPos = position;
    gold += fullRotationCount;

    if(negative){
        position = position - positionMove;
        if(position < 0){
            position += 100;
            gold += 1;
        }
        if(position == 0){
            gold += 1;
        }
        if(initialPos == 0){
            gold -= 1;
        }
    } else {
        position = position + positionMove;
        if(position > 99){
            position -= 100;
            gold +=1;
        }
    }
    if(position == 0 && (fullRotationCount > 0 || positionMove > 0)){
        silver += 1;
    }
});

rl.on("close", () => {
    console.log('silver', silver);
    console.log('gold', gold);
    console.log(`execution time: ${Date.now() - startTime} ms`);
});