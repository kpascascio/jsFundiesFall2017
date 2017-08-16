// Conditionals

/*
	Chaining conditional operators
	---------------------------------
	&& 
	||

*/
var name = "kenn";

if ( "Kenn" == name ) {
	console.log( "Hey your name is " + name);
}else {
	console.log("What is your name?");
};

// Create an If statment that checks if the users name does not have a capital letter,
// Rebuild their name with the capitalized first letter 

var fname = "Kenn";

if (fname[0] != fname[0].toUpperCase()) {
	fname = fname[0].toUpperCase() + fname[1] + fname[2] + fname[3];
	console.log("Horrible punctuation, you need to uppercase the first letter like this: " + fname);
} else {
	console.log("Great punctuation!");
}



 var age = 23
// when writing the if statments order matters.
if (age >= 25) {
	console.log("Yay you get lower rates on your car rental");
} else if (age >= 21) {
	console.log("Yay you can drink!");
} else if (age >= 18) {
	console.log("Yay you can vote!")
} else {
	console.log(" sorry too young to do anything!")
}

