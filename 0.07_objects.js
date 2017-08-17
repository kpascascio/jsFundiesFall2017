// Objects

let food = {
	pies: ['Pecan', 'Blueberry','Cherry', 'Key Lime'],
	pieNames: [],
	getPies: function(){
		return this.pies; //food object
	},
	addPie: function(){
		return this.pies.forEach(function(newP){
			console.log([newP] + " pie")
		});
	},
	getPieNames: function(){
		this.pies.forEach(function(pie){
			// console.log(pie)
			// console.log(food.pieNames)
			food.pieNames.push(pie + ' pie');
		})
		return this.pieNames
	}
}

console.log(food.getPieNames());

// console.log(food.pies[3] + " pie");

// Create a method inside of the object food that appends ' pie' to the different 
// pies in the array list 


// Create a method that adds the pies to a new array in the food object


















// Challenge iterate over the pie array and print out each pie, and add 'pie' to them
// using the forEach() method

// food.pies.forEach(function(pie){
// 	console.log(pie + ' pie');
// })