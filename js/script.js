"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

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

if (personalMovieDB.count > 10) {
    console.log('<10');
} elseif {}

console.log(personalMovieDB);
