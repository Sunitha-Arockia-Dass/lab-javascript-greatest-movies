// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let number = 0;
  if (moviesArray.length == 0) {
    return 0;
  }

  let dramaNumbers = moviesArray.filter((movies) => {
    if (
      movies.director === "Steven Spielberg" &&
      movies.genre.includes("Drama")
    ) {
      number++;
    }
  });
  return number;
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }

  const totalScore = movies.reduce((sum, movie) => {
    return movie.score !== undefined ? sum + movie.score : sum;
  }, 0);

  const movieCount = movies.length;

  const averageScore = totalScore / movieCount;

  return Number(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let number = 0;
  let drama = [];
  let dramaObj = {};
  let dramascore = moviesArray.filter((movies) => {
    if (movies.genre.includes("Drama")) {
      dramaObj.genre = movies.genre;
      dramaObj.score = movies.score;
      drama.push(dramaObj);
      number += movies.score;
    }
  });
  if (drama.length == 0) {
    return 0;
  }
  let avg = number / drama.length;
  console.log(drama);
  return Number(avg.toFixed(2));
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const sortedMovies = [...movies]; // Create a shallow copy of the original array

  sortedMovies.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  moviesArray = moviesArray.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  let orderedArray = moviesArray.map(function (value) {
    return value.title;
  });

  return orderedArray.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const modifiedMovies = movies.map((movie) => {
    const newMovie = { ...movie };

    const durationParts = newMovie.duration.split(" ");

    let totalMinutes = 0;

    for (const part of durationParts) {
      if (part.includes("h")) {
        totalMinutes += parseInt(part) * 60;
      } else if (part.includes("min")) {
        totalMinutes += parseInt(part);
      }
    }

    newMovie.duration = totalMinutes;

    return newMovie;
  });

  return modifiedMovies;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }
  let yearsScore = moviesArray.map(function (value) {
    return { year: value.year, score: value.score };// to get only year and score
  });
  const sorted = yearsScore.sort((a, b) => {
    return a.year - b.year;                       //to sort the year in ascending order
  });
  const groupedSorted = [];
  sorted.forEach((movie) => {                       //to add all the scores in particular year
    const sameYear = groupedSorted.find(
      (groupedSorted) => groupedSorted.year === movie.year
    );
    if (sameYear) {
      sameYear.score += movie.score;
    } else {
      groupedSorted.push(movie);
    }
  });
  const summedScore = groupedSorted.sort((a, b) => {      //to sort the score in descending order
    return b.score - a.score;
  });

  summedScore.forEach((movie) => {                  //to get number of movies in the year
    movie.number = 0;
    moviesArray.forEach((object) => {
      if (movie.year === object.year) {
        movie.number += 1;
      }
    });
  });

  summedScore.forEach((movie) => {
    movie.avg = movie.score / movie.number;       //to get avg score of a yr
  });

  const SortedAvg = summedScore.sort((a, b) => {     //to sort avg in descending order
    return b.avg - a.avg; 
  });

  return `The best year was ${SortedAvg[0].year} with an average score of ${SortedAvg[0].avg}`;
}
