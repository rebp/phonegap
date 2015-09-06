$(document).ready(init);

function init() {
	$('form#myForm').on('submit', saveData);
}

function saveData(e) {
	e.preventDefault();

	var name 		=  $('#name').val(),
		description = $('#description').val(),
		lat 		= $('#lat').val(),
		long 		= $('#long').val();

	$.ajax({
		url: "http://localhost/phonegap/add.php",
		type: "POST",
		data: ({
			name: name, 
			description: description, 
			lat: lat, 
			long: long
		}),
		cache: false,
		dataType: "text",
		success: send
	});
}

function send() {
	$.mobile.changePage("#page2", {transition: "slideUp", role: "page"});
}
