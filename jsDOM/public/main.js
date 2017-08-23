let input = document.getElementById("input");
let ouput = document.getElementById("output");
let ulist = document.getElementById('friendsList');

function capitalize(){
	let newName = "";
	for ( let l in input.value){
		if ( l == 0 ){
			newName = input.value[l].toUpperCase();
		} else {
			newName += input.value[l].toLowerCase();
		}
	}
	output.innerHTML = "Capitalized Name: " + newName;
	input.value = '';
	addItem(newName);
}
// onkeypress is an event 
input.onkeypress = function (e){
	if(e.keyCode === 13){
		return capitalize();
	}
}

function addItem(name){
	let li = document.createElement('li');
	li.innerHTML = name;
	ulist.appendChild(li);
}

let test = document.createElement('kjuygbkuyb');
console.log(test);





// Challenge: find out how to do have a conditional target the `enter key`
//  so that once it's pressed it can submit the form

// Challenge 2: after a name is capitalized make sure you clear the form 

// Challenge3: Create an ul list that prints out each name that a user wants to capitalize without bullet points