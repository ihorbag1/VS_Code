function sumBinary(a, b){
    let c = a + b;

    return console.log(`${a}, ${b} --> ` + c.toString(2) + ` (${a} + ${b} = ${c} in decimal or ${c.toString(2)} in binary)`);
}

sumBinary();