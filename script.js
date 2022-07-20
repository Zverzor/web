'use strict';

const numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');


const personalMovieDB = {
    'count': numberOfFilms,
    'movies': {},
    'actors': {},
    'genres': [],
    'privat': false
}

const lastMovie = prompt("Один из последних просмотренных фильмов?", '');
const lastMovieRate = prompt('На сколько оцените его?', '');


personalMovieDB.movies[lastMovie] = lastMovieRate;

console.log(personalMovieDB);