"use strict";

let numberOfFilms;

let yourFavGenre;

function start(){
    numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');

    while(isNaN(numberOfFilms) || numberOfFilms == null || numberOfFilms == ''){
        numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false  
};

function rememberMyFilms(){
    for( let i = 0; i < 2; i++) {
        const lastSeenFilm = prompt ('Один из последних просмотренных фильмов?', '');
        const scoreLastSeenFilm = +prompt ('На сколько оцените его?', '');
    
        if(lastSeenFilm == null || scoreLastSeenFilm == null || lastSeenFilm == '' || scoreLastSeenFilm == '' || lastSeenFilm.length > 50 || scoreLastSeenFilm.length > 3){
            console.log('Oops...');
            i--;   
        }else{
            personalMovieDB.movies[lastSeenFilm] = scoreLastSeenFilm;
            console.log('nice');   
        }   
    }
}

function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        alert('Просмотрено довольно мало фильмов');
    } else if(10 <= personalMovieDB.count || personalMovieDB.count < 30){
        alert('Вы классический зритель');
    } else if(personalMovieDB.count >= 30){
        alert('Вы киноман');
    } else{
        alert('Произошла ошибка');
    }
}

function showMyDB(){
    if(personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }else{
        console.log('Это приватная БД!');
    }
}

function writeYourGenre(){
    for(let i = 0; i < 3; i++){
        yourFavGenre = prompt(`Ваш любимый жанр под номером ${i + 1} `, '');

        if(yourFavGenre == null || isNaN(yourFavGenre) == false || yourFavGenre == ''){
            console.log('Oops...');
            i--;
        }else{
            personalMovieDB.genres[i] = yourFavGenre;
        }
    }

    console.log(personalMovieDB.genres);
}

rememberMyFilms();

detectPersonalLevel();

writeYourGenre();

showMyDB();
/*for (let i = 0; i < 2; i++) {
    const lastSeenFilm = prompt('Один из последних просмотренных фильмов?', ''),
    scoreLastSeenFilm = +prompt('На сколько оцените его?', '');

    if (lastSeenFilm != null && scoreLastSeenFilm != null && lastSeenFilm != '' && scoreLastSeenFilm != '' && lastSeenFilm.length < 50) {
        personalMovieDB.movies[lastSeenFilm] = scoreLastSeenFilm;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}*/