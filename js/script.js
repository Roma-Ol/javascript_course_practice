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
        
    if (a != "" && a != null && a.length > 50 && b != "" && b != null) {
        personalMovieDB.movies[a]=b;
    } else {
        console.log('number of films was entered uncorrectly');
    }
}



// if (numberOfFilms == "" || isNaN(numberOfFilms) || numberOfFilms == undefined || numberOfFilms.length > 50) {
//     numberOfFilms++;
// } else {
//     console.log('number of films was entered correctly');
// }

console.log(personalMovieDB);
