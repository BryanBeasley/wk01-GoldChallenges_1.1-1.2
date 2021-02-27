/* 
    - write an object literal that stores information about your favorite movie. nameOfMovie, runTime, characters, and genre should be keys directly inside the object.
        - characters will be an array that should store no more than 2 character objects, each of which stores name, age, and items.
        - items itself will also be an array that should store no more than 2 item objects. These items objects can have key-value pairs of whatever you would like (ex. {itemOne: 'Bow and Arrow'}).
        
        - use console.log statements to show that you can print out the nameOfMovie, runTime, the characters, the name of a character, and one of the items a character has. Your console should look similar to the screenshot below.
        */

/*      //TODO  -2-
       -Two Characters from movie in array items in array within array
          [
           { *name: '', *age: '', items: [ [object],[object] ] }
           { *name: '', *age: '', items: [ [object],[object] ] }
          ]
*/

let favoriteMovie = {
  movie: {
    title: "Willow",
    runTime: "2h 6min",
    genre: "fantasy",
    character: [
      { name: "Madmartigan", age: 29, items: [["sword"], ["black root"]] },
      { name: "Willow", age: 17, items: [["sword"], ["black root"]] },
    ],
  },
};

/*//TODO -3-
-Print out the 
    -nameOfMovie 
    -runTime 
    -the characters
    -the name of a character 
    -and one of the items a character has.
*/

console.log(favoriteMovie.movie.title);
console.log(favoriteMovie.movie.runTime);
console.log(favoriteMovie.movie.genre);
console.log(favoriteMovie.movie.character[0].name);
console.log(favoriteMovie.movie.character[0].items[1]);
