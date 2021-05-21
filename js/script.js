"use strict";

let numberOfFilms;

function start () {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    }
};
// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Один из просмотренных фильмов?"),
            b = prompt("На сколько вы его оцените?");
        if (a != '' && a != null && b != '' && b != null) {
            personalMovieDB.movies[a]=b;
            console.log('---T---');
        } else {
            console.log('---F---');
            i--;
        }
    }
}
// rememberMyFilms();

function detectMyPersonalLevel() {
    let x = (personalMovieDB.count < 10) ? console.log('Просмотрено довольно мало фиильмов'):
        (personalMovieDB.count > 10 && personalMovieDB.count < 30) ? console.log('Вы классический зритель'):
            (personalMovieDB.count > 30) ? console.log('Вы киноман'):
                console.log('ошибка');
}
// detectMyPersonalLevel()

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
    else {
        console.log('this info is held under the secret')
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i < 4; i++){
        personalMovieDB.genres[i - 1] = prompt(`ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();
