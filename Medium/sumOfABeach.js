/*
	Beaches are filled with sand, water, fish, and sun.
	Create a function named sumOfABeach that takes a parameter (type: string).
	Given a string, calculate how many times the words
	"Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).
	The input can be an empty string.
	Examples:
		console.log(sumOfABeach("WAtErSlIde"))                   // ==>  1
		console.log(sumOfABeach("GolDeNSanDyWateRyBeaChSuNN"))   // ==>  3
		console.log(sumOfABeach("gOfIshsunesunFiSh"))            // ==>  4
		console.log(sumOfABeach("cItYTowNcARShoW"))              // ==>  0
		console.log(sumOfABeach(""))                             // ==>  0
*/

// function sumOfABeach(str){
//     let res = str.match(sand/water/fish/sun/gi) || [].length;
//     return res
// }

// console.log(sumOfABeach("WAtErSLIde"))

function sumOfABeach(main_str, sub_str) 
    {
    main_str += '';
    sub_str += '';

    if (sub_str.length <= 0) 
    {
        return main_str.length + 1;
    }

       subStr = sub_str.replace(/"sand","water", "fish", "sun"/gi);
       return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
    }
 
    console.log(sumOfABeach("saintnicksandsandsandbeac", 'beach'))
