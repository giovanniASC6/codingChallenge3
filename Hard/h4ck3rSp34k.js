/*
H4ck3r Sp34k
Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string. All input will be in lower case.
Examples
console.log(hackerSpeak("javascript is cool")) //➞ "j4v45cr1pt 15 c00l"
console.log(hackerSpeak("programming is fun")) //➞ "pr0gr4mm1ng 15 fun"
console.log(hackerSpeak("become a coder")) //➞ "b3c0m3 4 c0d3r"
console.log(hackerSpeak("br")) //➞ "br"
console.log(hackerSpeak("")) //➞ ""
Notes
In order to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.
*/

const hackerSpeak = str => {
    str = str.replace(/[aA]/g, "4");
    str = str.replace(/[eE]/g, "3");
    str = str.replace(/[iI]/g, "1");
    str = str.replace(/[oO]/g, "0");
    str = str.replace(/[sS]/g, "5");
  
    return str;
  };

  console.log(hackerSpeak("aaaiiiisssss-_00"))