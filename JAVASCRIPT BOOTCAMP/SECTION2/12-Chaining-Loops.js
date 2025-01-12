

// CHAINING OF MANY MAPS AND FILTER
let myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNumers
                .map( (num) => num *10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40 )
 console.log(newNums);
 
 // REDUCE 
 const mytotal = myNumers.reduce( (acc, current) => acc + current, 0 ); // acc : Accumulator, current : Current element
 console.log(mytotal);
 