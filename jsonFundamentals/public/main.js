$(document).ready(function(){
	$.ajax({
		method: 'GET',
		url: 'users.json'
	}).done(function(users) {
		console.log(users);
	})
})