$(document).ready(function(){ 

	$('body').scrollspy({ target: '.navbar' }); /*To highlight current position on the navbar while scrolling*/

	$(".nav a").on("click", function(){
			// so that the clicked one gets highlighted
			$(".nav").find(".active").removeClass("active");
			$(this).parent().addClass("active");
			//to hide the menu after clicking
			$('.navbar-collapse').collapse('hide');
	});

	$('#registrationForm').on('submit', function(ev) {

		// prevent from auto-submitting  
		ev.preventDefault();
		ev.stopPropagation();

		sendData();
	});


	var sendData = function() { 

		var name = $('#name').val();
		var email = $('#email').val();

		var messageToSend = "Name: " + name + "\nEmail: " + email;

		var dataString = "name=" + name + "&email=" + email + "&MessageToSend=" + messageToSend;

		$.ajax({
			type: "post",
			url: "/php/insert.php",
			data: dataString,
			success: function() {
				$('#registrationForm').hide();
				$('#changingText').text("Thank you for subscribing " + name +  "!");
			},
			error: function(xhr, textStatus, error){
				  console.log(xhr.statusText);
				  console.log(textStatus);
				  console.log(error);
			}
		});
		
		return;
	}

});
