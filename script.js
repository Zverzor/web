'use strict';

const numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');


const personalMovieDB = {
    'count': numberOfFilms,
    'movies': {},
    'actors': {},
    'genres': [],
    'privat': false
}



for (let i = 0; i < 2; i++) {
    const lastMovie = prompt("Один из последних просмотренных фильмов?", '');
    const lastMovieRate = prompt('На сколько оцените его?', '');

    if (lastMovie != null && lastMovieRate != null && lastMovie != '' && lastMovieRate != '' && lastMovie.length < 50) {
        personalMovieDB.movies[lastMovie] = lastMovieRate;
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Мало');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Норм');
} else if (personalMovieDB.count >= 30) {
    console.log('Киноман!');
} else {
    console.log('Ошибка');
}






