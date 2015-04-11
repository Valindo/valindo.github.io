<?php

	ini_set('display_errors',1);

	// getting values from client-side
	$name = $_POST["name"];
	$email = $_POST["email"];
	$message = $_POST["MessageToSend"];

	// send email to Nagarjun
	$subject = "Plugzee Sign-Up";
	$to = "nagarjunkinare@gmail.com";

	$headers = "From: $email\r\n";
	$headers .= "Content-type: text/plain\r\n";

		// send the email
		mail($to, $subject, $message, $headers);

	// DB entry code:
	$username = "plugz6vh_admin"; //mysql username
	$password = "plugzee2014"; //mysql password
	$hostname = "localhost"; //hostname
	$databasename = 'plugz6vh_maillist'; //databasename

	//connect to database
	$conn = new mysqli($hostname, $username, $password, $databasename);

	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	} 

	$sql = "INSERT INTO Registration VALUES ( '$name' , '$email');" ;
	
	if ($conn->query($sql) === TRUE) {
		echo "New record created successfully";
	} else {
		echo "Error: " . $sql . "<br>" . $conn->error;
	}
	

	$conn->close();

	header( "Location: http://plugzee.com/" );		//not sure if this line is needed. If not, remove.

?>