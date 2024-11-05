            // ARRAY METHODS
let arr = [1, 2, 3, 4, 5, 6, 7, 8]
arr.push(9, 10) // Add Element to Array
console.log(arr); 
arr.pop(9) // Removes Last Element
arr.unshift(9) // Adds  Element at the beginning of the array
arr.shift(0) // Removes  the first element of the array

console.log(arr.indexOf(3)); // will show index of number
console.log(arr.includes(11)); // will show if the given number is present in the array or not




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