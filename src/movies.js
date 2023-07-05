// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {}

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
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const sortedMovies = [...movies]; // Create a shallow copy of the original array
    
    sortedMovies.sort((a, b) => {
      if (a.year !== b.year) {
        return a.year - b.year; // Sort by year in ascending order
      } else {
        return a.title.localeCompare(b.title); // Sort by title alphabetically
      }
    });
    
    return sortedMovies;
  }
  

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    const modifiedMovies = movies.map(movie => {
      const newMovie = { ...movie }; // Create a shallow copy of each movie object
      
      const durationParts = newMovie.duration.split(' '); // Split duration into hours and minutes
      
      let totalMinutes = 0;
      
      for (const part of durationParts) {
        if (part.includes('h')) {
          totalMinutes += parseInt(part) * 60; // Convert hours to minutes
        } else if (part.includes('min')) {
          totalMinutes += parseInt(part); // Add minutes
        }
      }
      
      newMovie.duration = totalMinutes; // Update duration to total minutes
      
      return newMovie;
    });
    
    return modifiedMovies;
  }
  

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
