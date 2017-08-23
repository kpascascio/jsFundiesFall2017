// Nathan's code 
$(submitButton).click(capitalize)
$(input).keypress(function (e){
    if(e.keyCode === 13){
        capitalize();
    }

})
function capitalize() {
    let newName = ""
    // console.log(output)
    for (let l in input.value) {
        if (l == 0) {
            newName = input.value[l].toUpperCase()
        } else {
            newName += input.value[l].toLowerCase()
        }
    }
    input.value = ""
    output.innerHTML = 'Capitalized name: ' + newName 
    $(nameList)
    	.append('<li>')
    	.append(newName)

}