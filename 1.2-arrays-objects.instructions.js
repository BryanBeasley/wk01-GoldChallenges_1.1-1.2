/* 
    - write an object literal that stores information about your favorite movie. nameOfMovie, runTime, characters, and genre should be keys directly inside the object.
        - characters will be an array that should store no more than 2 character objects, each of which stores name, age, and items.
        - items itself will also be an array that should store no more than 2 item objects. These items objects can have key-value pairs of whatever you would like (ex. {itemOne: 'Bow and Arrow'}).

    - use console.log statements to show that you can print out the nameOfMovie, runTime, the characters, the name of a character, and one of the items a character has. Your console should look similar to the screenshot below.
*/

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS

/*//TODO 
- Favorite movie - 
    -nameOfMovie
    -runTime
    -characters
    -genre
*/

let favoriteMovie = {
            movie: {
                title: "Willow",
                runTime: "2h 6min",
                genre: "fantasy",
                character: 
                [ 
                    {name: 'Madmartigan', age: 29, items: [['sword'], ['black root']]},
                    {name: 'Willow', age: 17, items: [['sword'], ['black root']]}
                ] 
            }
        }

//console.log(Object.keys(favoriteMovie));
//console.log(Object.keys(favoriteMovie.movie));
//console.log(Object.keys(favoriteMovie.movie.toString()));
console.log(Object.values(favoriteMovie.movie));
//console.log(Object.values(favoriteMovie.movie.items[1]));
console.log(favoriteMovie.movie.character[1, );


/*//TODO  -2-
-Two Characters from movie in array items in array within array
   [
    { *name: '', *age: '', items: [ [object],[object] ] }
    { *name: '', *age: '', items: [ [object],[object] ] }
   ]
    */

/*//TODO -3-
-Print out the 
    -nameOfMovie 
    -runTime 
    -the characters
    -the name of a character 
    -and one of the items a character has.
*/

