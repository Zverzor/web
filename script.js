'use strict';


const personalMovieDB = {
    'count': 0,
    'movies': {},
    'actors': {},
    'genres': [],
    'privat': false,
    start: function() {
        personalMovieDB.count = prompt('Сколько фильмов уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Сколько фильмов уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const lastMovie = prompt("Один из последних просмотренных фильмов?", '').trim();
            const lastMovieRate = prompt('На сколько оцените его?', '');
    
            if (lastMovie != null && lastMovieRate != null && lastMovie != '' && lastMovieRate != '' && lastMovie.length < 50) {
                personalMovieDB.movies[lastMovie] = lastMovieRate;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Мало');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Норм');
        } else if (personalMovieDB.count >= 30) {
            console.log('Киноман!');
        } else {
            console.log('Ошибка');
        }
    }, 
    showMyBD: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }, 
    toggleVisibleMyBD: function() {
        if (personalMovieDB.privat) {
            personalMovieDB = false;
        } else {
            personalMovieDB = true;
        }
    },
    writeYourGenerals: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр ${i}`);

            if (genre === '' || genre === null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] =  genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        })
    }
}   