console.log("Unit 2, D4")

function print(toPrint) {
  console.log(toPrint)
}

/* EXERCISE 1
  Given the object below, write a piece of code for programmatically removing the last skill from the skills array inside the me object.
 */

const me = {
  name: "Joh",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
for (let i = 0; i < 3; i++) {
  me.skills.pop()
}
// or 
function removeLastEntry(arr) {
  arr.pop()
} // input: removeLastEntry(me.skills)

/* EXERCISE 2
Write a piece of code to create an array of only ODD numbers from 1 to 100
 */
let oddNumArr = []
for (let i = 0; i < 100; i++) {
  if (i%2===1) {
    oddNumArr.push(i)
  }
}

/* EXERCISE 3
Write a piece of code to create an array of 10 elements of random numbers in the range from 0 to 100 inclusive
 */
let ranNumArr = []
for (let i = 0; i < 10; i++) {
  ranNumArr.push(Math.floor(Math.random() * 101));
}

/* EXERCISE 4
  Write a piece of code for getting only even numerical values from an array . 
 */
let evenNumArr = []
function getOnlyEven (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2===0) {
      evenNumArr.push(arr[i])
    }
  }
}
// run the getOnlyEven function with the ranNumArr array

/* EXERCISE 5
Write a piece of code to sum up the numbers in an array
 */
let sum = 0;
ranNumArr.forEach(number => {
  sum+=number;
});

/* EXERCISE 6
 Write a piece of code for increasing all the numerical values in a array by 1.
*/
let oneUpArr = []
ranNumArr.forEach(value => {
  value++;
  oneUpArr.push(value)
});

/* EXERCISE 7 (EXTRA)
 Write a piece of code for deleting only even entries from an array.
*/
let deleteEvenNumArr = [...ranNumArr];
deleteEvenNumArr.forEach(function callback(value, index) {
  if (value%2===0) {
    delete deleteEvenNumArr[index];
  }
});


/* EXERCISE 8
Write a piece of code to create an array of 10 elements of random numbers in the range from 0 to 10 inclusive WITHOUT duplicates
 */
let nonDuplicateArr = []
function createUniqueArr () {
  for (let [i, j] = [0, 0]; nonDuplicateArr.length < 10; i++) {
    let uniqueNumBool = false;
    do {
      let ranNumber = (Math.floor((Math.random() * 10) + 1));
      if (!nonDuplicateArr.includes(ranNumber)) {
        nonDuplicateArr.push(ranNumber);
        uniqueNumBool = true;
      }
      j++;
      if (j>1000) {
        return alert("Function exceeded 1000 loops!");
        
      }
    } while (uniqueNumBool === false);
  }
}

/* EXERCISE 9
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/
let stringArr = ['butter', 'cream', 'eggs', 'flour', 'sugar', 'milk']
let stringLengthArr = []
stringArr.forEach(value => {
  stringLengthArr.push(value.length)
});

/* EXERCISE 10
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/
let numArr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
let reverseNumArr = []
for (let i = numArr.length; i != 0; i--) {
  reverseNumArr.push(numArr[i-1]);
}

/* EXERCISE 11
 Write a piece of code for getting the maximum numerical value from an array.
*/
let maxNum;
ranNumArr.forEach(function (value, index) {
  if (index===0) {
    maxNum = value;
  }
  else {
    if (value > maxNum) {
      maxNum = value;
    }
  }
});

/* This movies array is used throughout the exercises. You're not supposed to alter it. */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
// Title: "The Lord of the Rings: The Fellowship of the Ring",
//     Year: "2001",
//     imdbID: "tt0120737",
//     Type: "movie",
//     Poster:

/* EXERCISE 12
    Write a piece of code to  find the oldest movie in the provided movies array.
*/
let oldestMovie = movies[0].Year;
movies.forEach(function (value, index) {
  if (oldestMovie > value.Year) {
    oldestMovie = value.Year;
  }
});

/* EXERCISE 13
    Write a piece of code to get the number of movies contained in the provided movies array.
*/
let numOfMovies = movies.length;

/* EXERCISE 14
    Write a piece of code to create an array with just the titles of the movies contained in the provided movies array.
*/
let movieTitlesArr = [];
movies.forEach(function (value) {
  movieTitlesArr.push(value.Title)
});

/* EXERCISE 15
   Write a piece of code to get only the movies produced in this millennium from the provided movies array.
*/
let movieThisMillen = [];
movies.forEach(value => {
  if (value.Year >= 2000) {
    movieThisMillen.push(value.Year)
  }
});

/* EXERCISE 16
   Write a piece of code to get  the movie with the  id given below from the provided movies array.
*/
const id = "tt0355702";
let selectedMovie;
for (let i = 0; i < movies.length; i++) {
  if (movies[i].imdbID === id) {
    selectedMovie = movies[i].Title;
    break;
  }
}
// OR // Input ID as parameter to search
function findMovieById(input_id) {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].imdbID === input_id) {
      selectedMovie = movies[i].Title;
      return console.log(`You have selected ${selectedMovie} to watch.`)
    }
  }
}

/* EXERCISE 17
     Write a piece of code to get  the  the sum of all the years in which the movies in the provided movies array have been produced.
*/
// I am not sure exactly what is being asked here.
// In this case I did the following: 2001 + 2005 + 2003 etc... 
let sumOfMovieYears = 0;
for (const obj of movies) {
  sumOfMovieYears += parseInt(obj.Year);
  console.log(sumOfMovieYears)
} // output: 28007


/* EXERCISE 18
   Write a piece of code to get  all the movies in the provided movies array which contain the string value (provided below) in the title.
*/
// Sorry, I don't understand the question and there is no string value provided
// below? Thanks