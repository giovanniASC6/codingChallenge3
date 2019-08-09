/*
The first century spans from the year 1 up to and including the year 100,
The second - from the year 101 up to and including the year 200, etc.
Task:
Given a year (number), return the century (string) it is in.
Input, Output Examples:
	console.log(centuryFromYear(1700))  //returns "18th century"
	console.log(centuryFromYear(1900))  //returns "19th century"
	console.log(centuryFromYear(1600))  //returns "17th century"
	console.log(centuryFromYear(2000))  //returns "20th century"
		console.log(centuryFromYear(100))  //returns "1st century"
*/

function centuryFromYear(year) { 
  
    if (year <= 0) 
    return ("0 and negative is not allowed for a year"); 
  
    else if (year <= 100) 
        return ("1st century\n"); 
  
    else if (year % 100 == 0) 
        return (year / 100 + "th century"); 
  
    else
        return (year / 100 + 1 + "th century"); 
} 

console.log(centuryFromYear(700));