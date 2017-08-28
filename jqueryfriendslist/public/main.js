$(document).ready(function(){

	$.ajax({
		type: 'GET',
		url: 'https://api.edamam.com/search?q=chicken&app_id=29487534&app_key=9ee7ad478ecd93d1db8f0f2601d00e1c'
	}).done(function(data){
		 console.log(data)
	})

	$(submit).on('click', function(){
		let person = {
			name: $(usr).val(),
			email: $(email).val()
		}
		$.ajax({
			type: 'POST',
			url: 'http://rest.learncode.academy/api/learncode/javascriptfall',
			data: person
		}).done(function(info){
			console.log(info);
		})
	})


})