"use strict";

function main (w){
    if(w > 100 || w <= 0 || typeof(w) != 'number'){
        return console.log('ERROR');
    } else if(w % 2 == 0){
        return console.log('YES');
    }else{
        return console.log('NO');
    }
}

main();


