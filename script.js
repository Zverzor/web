'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов уже посмотрели?', '');
    }
}

// start();

const personalMovieDB = {
    'count': numberOfFilms,
    'movies': {},
    'actors': {},
    'genres': [],
    'privat': false
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastMovie = prompt("Один из последних просмотренных фильмов?", '').trim();
        const lastMovieRate = prompt('На сколько оцените его?', '');

        if (lastMovie != null && lastMovieRate != null && lastMovie != '' && lastMovieRate != '' && lastMovie.length < 50) {
            personalMovieDB.movies[lastMovie] = lastMovieRate;
        } else {
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Мало');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Норм');
    } else if (personalMovieDB.count >= 30) {
        console.log('Киноман!');
    } else {
        console.log('Ошибка');
    }
}

detectPersonalLevel();

function showMyBD(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyBD(personalMovieDB.privat);

function writeYourGenerals() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр ${i}`);
    }
}

writeYourGenerals();

