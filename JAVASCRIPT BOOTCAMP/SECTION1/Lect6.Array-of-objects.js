            // ARRAY METHODS
let arr = [1, 2, 3, 4, 5, 6, 7, 8]
arr.push(9, 10) // Add Element to Array
console.log(arr); 
arr.pop(9) // Removes Last Element
arr.unshift(9) // Adds  Element at the beginning of the array
arr.shift(0) // Removes  the first element of the array

console.log(arr.indexOf(3)); // will show index of number
console.log(arr.includes(11)); // will show if the given number is present in the array or not

const newArray = arr.join(); // join converts array into String and also values are printed without Square Brackets. 
console.log(newArray);

console.log("A ", arr);
const myN1 = arr.slice(1 , 3)
console.log(arr);// Also in slice the orignal  array is not changed.
console.log(myN1); // AS u see in slice the range  is 1 to 3 so it will print 2,3.


console.log("B " , arr);
const myN2 = arr.splice(1, 3)
console.log(arr); // In splice the  original array is changed.( 2, 3, 4 is removed from array)
console.log(myN2); // In splice  the range is 1 to 3 so it will print 2, 3, 4


// to combine 2 arrays into 1 array ,  we can use concat() method and also SPREAD  OPERATOR [MOSTLY USED]
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
console.log(arr1.concat(arr2)); // concat used to  combine 2 arrays into 1 array
console.log([...arr1, ...arr2]); // spread operator is used here to combine 2



// so if there are multiple movies then to access each of them it will become difficult for us 
// so simply we can store the data in an array which will make it easy for us to call.
        let movie =[ 
            {
           name: " Harry Potter",
           rating: 9.2,
           poster:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MpyZqbzROoTvIaGSsimAfgHaFj%26pid%3DApi&f=1&ipt=4e01199474dd9dcee4178d86a6b7cb11da69ea2cc1635ea88ef7011e5fedb629&ipo=images",
           description:"Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling"

          },
          {
            name: " Avengers Endgame",
            rating: 9.1,
            poster: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.m52l-K5MaUCrO8dlrP4IBwHaMR%26pid%3DApi&f=1&ipt=6d02bb10b5e26f23bd748a5fee69250bad9d83498a77c9e8ef9f48ee48e75dae&ipo=images",
            description: "Endgame is a 2019 American superhero film based on the Marvel Comics"
          },
          {
            name: " Avengers Endgame",
            rating: 9.1,
            poster: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.m52l-K5MaUCrO8dlrP4IBwHaMR%26pid%3DApi&f=1&ipt=6d02bb10b5e26f23bd748a5fee69250bad9d83498a77c9e8ef9f48ee48e75dae&ipo=images",
            description: "Endgame is a 2019 American superhero film based on the Marvel Comics"
          },
          {
            name: " Avengers Endgame",
            rating: 9.1,
            poster: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.m52l-K5MaUCrO8dlrP4IBwHaMR%26pid%3DApi&f=1&ipt=6d02bb10b5e26f23bd748a5fee69250bad9d83498a77c9e8ef9f48ee48e75dae&ipo=images",
            description: "Endgame is a 2019 American superhero film based on the Marvel Comics"
          },
          {
            name: " Avengers Endgame",
            rating: 9.1,
            poster: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.m52l-K5MaUCrO8dlrP4IBwHaMR%26pid%3DApi&f=1&ipt=6d02bb10b5e26f23bd748a5fee69250bad9d83498a77c9e8ef9f48ee48e75dae&ipo=images",
            description: "Endgame is a 2019 American superhero film based on the Marvel Comics"
          },
          {
            name: " Avengers Endgame",
            rating: 9.1,
            poster: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.m52l-K5MaUCrO8dlrP4IBwHaMR%26pid%3DApi&f=1&ipt=6d02bb10b5e26f23bd748a5fee69250bad9d83498a77c9e8ef9f48ee48e75dae&ipo=images",
            description: "Endgame is a 2019 American superhero film based on the Marvel Comics"
          },
          {
            name: " Avengers Endgame",
            rating: 9.1,
            poster: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.m52l-K5MaUCrO8dlrP4IBwHaMR%26pid%3DApi&f=1&ipt=6d02bb10b5e26f23bd748a5fee69250bad9d83498a77c9e8ef9f48ee48e75dae&ipo=images",
            description: "Endgame is a 2019 American superhero film based on the Marvel Comics"
          },
          {
            name: " Avengers Endgame",
            rating: 9.1,
            poster: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.m52l-K5MaUCrO8dlrP4IBwHaMR%26pid%3DApi&f=1&ipt=6d02bb10b5e26f23bd748a5fee69250bad9d83498a77c9e8ef9f48ee48e75dae&ipo=images",
            description: "Endgame is a 2019 American superhero film based on the Marvel Comics"
          },
          {
            name: " Avengers Endgame",
            rating: 9.1,
            poster: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.m52l-K5MaUCrO8dlrP4IBwHaMR%26pid%3DApi&f=1&ipt=6d02bb10b5e26f23bd748a5fee69250bad9d83498a77c9e8ef9f48ee48e75dae&ipo=images",
            description: "Endgame is a 2019 American superhero film based on the Marvel Comics"
          },
          {
            name: " Avengers Endgame",
            rating: 9.1,
            poster: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.m52l-K5MaUCrO8dlrP4IBwHaMR%26pid%3DApi&f=1&ipt=6d02bb10b5e26f23bd748a5fee69250bad9d83498a77c9e8ef9f48ee48e75dae&ipo=images",
            description: "Endgame is a 2019 American superhero film based on the Marvel Comics"
          }
    ]
    console.log(movie[0]); // also we can call all of them using for loop

    for( let i =0; i<movie.length; i++){
        console.log(movie[i]);
    }