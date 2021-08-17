/*
================
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie 
following using
 the "movies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3

================
*/
var movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];

// create showMovies function
let moviesShown = function showMovies() {
  movies.forEach((movie, index) => {
      setTimeout(() => {
        let divAllmovies = document.getElementById("all-movies");
        let pElem = document.createElement("p");
        divAllmovies.appendChild(pElem);
        pElem.innerHTML = `${movie.title}, ${movie.director}`;
        let movieNspan = document.getElementById("movies-number");
        movieNspan.innerHTML = movies.length;
      }, 1000 * (index + 1))
    }
  )
}


function addMovie(movie, callback) {
  setTimeout(function () {
    movies.push(movie)
    callback()
  }, 2000)
}

addMovie({
  title: "The Tree of Life",
  director: "Terrence Malick",
  type: "drama",
  haveWatched: true,
}, () => { moviesShown() })

console.log(addMovie)


const formAddMovie = document.createElement("form");

const title = document.createElement("input"); //input element, text
title.setAttribute('type',"text");
formAddMovie.appendChild(title);
const director  = document.createElement("input");
director.setAttribute('type',"text");
formAddMovie.appendChild(director);
const type = document.createElement("input");
type.setAttribute('type',"text");
formAddMovie.appendChild(type);
const haveWatched = document.createElement("input");
haveWatched.setAttribute('type',"text");
formAddMovie.appendChild(haveWatched);
const btn = document.createElement('button')
btn.innerHTML = 'SAVE'
formAddMovie.appendChild(btn)
title.style.display = 'block'
title.style.marginBottom = '10px'
director.style.display = 'block'
director.style.marginBottom = '10px'
type.style.display = 'block'
type.style.marginBottom = '10px'
haveWatched.style.display = 'block'
haveWatched.style.marginBottom = '10px'

btn.style.display = 'block'

const formInBody = document.getElementsByTagName("body")[0].appendChild(formAddMovie);

btn.addEventListener('click', (e) => {
  e.preventDefault();
    console.log(title.innerHTML = title.value)
    console.log(director.innerHTML = director.value)
    console.log(type.innerHTML = type.value)
    console.log(haveWatched.innerHTML = haveWatched.value)

  }
)

//console.log(title.innerHTML = title.value)


