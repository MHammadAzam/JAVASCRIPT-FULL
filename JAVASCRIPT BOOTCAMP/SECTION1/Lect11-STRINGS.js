// Methods to use Strings
//(1)
const Str = "Hammad"
console.log(Str);

//(2)
const Stri = new String('Hammad') // with this method you can access  the string methods for further check on browser console

console.log(Str.toLowerCase());
console.log(Stri.toUpperCase());
console.log(Stri.charAt(3));
console.log(Stri.indexOf("d"));
console.log(Stri.substring(0,5)); // values will be  from 0 to 4.

const Triming = "     Hammad      "
console.log(Triming);
console.log(Triming.trim()); // Remove  the leading and trailing spaces from the string.

const url = "https://hammad.com/hammad%20Azam"
console.log(url.replace('%20' , '-')); // Replace Element of your choice





