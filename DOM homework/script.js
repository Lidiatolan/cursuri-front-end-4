var check_input = function(inp) {
	if(inp.value.length === 0) {
		inp.classList.add("invalid");
	} else {
		console.log(inp.value);
		inp.classList.remove("invalid");
	}
};


var validate = function() {
	console.log("Validating form");

	var first_name = document.getElementById('firstname');
    check_input(first_name, 'First name');

    var last_name = document.getElementById('lastname');
    check_input(last_name, 'Last name');

    var gender = document.querySelector('input[name="gender"]:checked');
    check_input(gender, 'Gender');

    var message = document.getElementById('form_message');
    check_input(message, 'Your message to us');

    
    var form_valid = first_name.value.length && last_name.value.length && message.value.length && true;

    console.log('Form valid:', (form_valid) ? 'YES :)' : 'NO :(');
   

    
    var top_message = document.getElementById('top_message');
    if (form_valid) {
        top_message.style.display = "block";
        top_message.innerHTML = 'Thank you for contacting us, ' + first_name.value;
    } else {
        top_message.style.display = "none";
    }
};
