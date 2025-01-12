// Methods to use Strings
//(1)
const Str = "Hammad"
console.log(Str);

//(2)
const Stri = new String('Hammad') // with this method you can access  the string methods for further check on browser console

console.log(Str.length); // It is a property
console.log(Str.toLowerCase()); // these are built-in string functions
console.log(Stri.toUpperCase());
console.log(Stri.slice(2, 4)); //slice takes arguments.it will print index 2 and 3 , the last index is not included.
console.log(Stri.charAt(3));
console.log(Stri.indexOf("d"));
console.log(Stri.substring(0,5)); // values will be  from 0 to 4.

const Triming = "     Hammad      "
console.log(Triming);
console.log(Triming.trim()); // Remove  the leading and trailing spaces from the string.

const url = "https://hammad.com/hammad%20Azam"
console.log(url.replace('%20' , '-')); // Replace Element of your choice


let fr = "Hamoad"  // strings are unchangable, you can create a new string but cant change the original string
for(let i = 0; i< fr.length; i++){
  console.log(fr[i]);
  
}

let str = "hello world"
let find = "hello"
console.log(`The word ${find} ${str.includes(find) ? "is ": "is not "} found in the string`);

console.log(str.startsWith(find));
console.log(str.endsWith("rld"));






