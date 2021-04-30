"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

// for (let i = 0; i < 2; i++) {
//     let a = prompt("Один из просмотренных фильмов?"),
//         b = prompt("На сколько вы его оцените?");
        
//     if (a != '' && a != null && b != '' && b != null) {
//         personalMovieDB.movies[a]=b;
//         console.log('---T---');
//     } else {
//         console.log('---F---');
//         i--;
//     }
// }

let x = (personalMovieDB.count < 10) ? console.log('Просмотрено довольно мало фиильмов'):
        (personalMovieDB.count > 10 && personalMovieDB.count < 30) ? console.log('Вы классический зритель'):
        (personalMovieDB.count > 30) ? console.log('Вы киноман'):
        console.log('ошибка');

// (personalMovieDB.count < 10) ? console.log('Просмотрено довольно мало фиильмов') else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) ? console.log('Вы классический зритель') else if (personalMovieDB.count > 30) ? console.log('Вы киноман') : console.log('ошибка')

// if (personalMovieDB.count < 10) {
//     console.log('Просмотрено довольно мало фиильмов');
// } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
// } else if (personalMovieDB.count > 30) {
//     console.log('Вы киноман');
// } else {
//     console.log('Ошибка алло');
// }

console.log(personalMovieDB);
