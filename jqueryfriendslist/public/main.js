$(document).ready(function(){

	$.ajax({
		type: 'GET',
		url: 'http://na1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&dataById=false&api_key=RGAPI-f5792db8-ee51-41b5-a3cd-c5fb43037358'
	}).done(function(data){
		 console.log(data)
	})

	// $(submit).on('click', function(){
	// 	let person = {
	// 		name: $(usr).val(),
	// 		email: $(email).val()
	// 	}
	// 	$.ajax({
	// 		type: 'POST',
	// 		url: 'http://rest.learncode.academy/api/learncode/javascriptfall',
	// 		data: person
	// 	}).done(function(info){
	// 		console.log(info);
	// 	})
	// })


})