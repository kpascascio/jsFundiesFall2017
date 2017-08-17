// Loops 

/*
	lcv = loop control variable
	
	for loop
	---------------------
	for (initalize var; have boolen expression; how we step through the loop) {
		//some code
	}
	while loop
	---------------------
	


	for in loop 
	---------------------
	
	

	do while loop
	---------------------
	runs at least once 

*/
// for ( var i = 0; i < 10; i = i + 1){
// 	console.log(i)
// }


// challenge using a for loop count to 20 by 2's

for (var i = 0; i < 21; i += 2) {
	console.log(i)
}


//  best practice?

var name = "Kenn"

for ( var i = 0; i < name.length; i++){
	console.log(name[i])
}


// initialize variable
var j = 0
// boolean expression
while ( j < 5) {
	j = j + 1
	//step through the loop
	console.log(j)
	 // j += 1 || j++ 
}

// while(true){
// 	console.log("runs once");
// 	// make note 
// 	return false; // break
// }

// challenge create a while loop that counts to 100 by 10's  (should see 10 ... 100)
var numTo10 = 0; 

while (numTo10 < 100) {
	numTo10 += 10
	console.log(numTo10)
}



var studentName = "smita";
var capSN = "";
//     lcv      collection 
for ( var l in studentName) {
	if (l == 0) {
		capSN = studentName[l].toUpperCase();
	} else {
		capSN += studentName[l];
	}
}

console.log(capSN);

// capitalize the first letter and rebuild the string










console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');


