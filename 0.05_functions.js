// Functions 

// greeting();
function greeting() {
	console.log("Good Morning!");
}

// parenthesis invokes our function so that it runs the code inside of it
greeting();

// Challenge, Create a function that says "Day 4 feeling great!" then call that function

// Functions with parameters 

function greeting2(name, age , height){
	console.log("Time to start coding " + name + age + height);
}


greeting2("Jay",32, "serg", "sertgh");





function sum2(num1, num2){
	console.log(num1 + num1 + num2)
}

sum2(3 , 4)



//scope 


var fname = "Aj";

function hello(fname){
	lname = "Hephner";
	console.log(fname + " " +lname) //
}
// console.log(lname); //won't run

hello("Aj");

if ( 1 == 1) {
	let sum = 1 + 1
	console.log(sum);//2
}

// console.log(sum);//err


// Create a function called capitalize() and use the for loop we created yesterday to 
//  capitalize names
function capitalize(studentName){
  var newName = "";
  for ( var l in studentName) {
  	// '0'
    if (l == 0){
      // What happens if we use 3 equals?... why?

      newName = studentName[l].toUpperCase();
    }else {
      newName+= studentName[l];
    }
  	
  }
   return newName;
}

capitalize('kenn');