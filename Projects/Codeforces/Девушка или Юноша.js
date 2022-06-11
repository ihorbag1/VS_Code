"use strict";

function whoIsYou(nickname){
    if(typeof(nickname) != 'string' || nickname.length > 100){
        return console.log('ERROR');
    }else if(/^[a-zA-Z]+$/.test(nickname) == false){
        return console.log('ONLY LATIN ALPHABET');
    }else if(nickname.length % 2 == 0){
        return console.log('CHAT WITH HER!');
    }else{
        return console.log('IGNORE HIM!');
    }
}

whoIsYou();