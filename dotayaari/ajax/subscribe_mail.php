<?php
$email = $_POST['email'];

//print_r($reserv);

$to = 'mamun@enhancedgroupbd.com';
$subject = 'Rumors Subscribe';

$message = '<strong>Email : </strong>'.$email.'<br/>';

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: <'.$email.'>' . "\r\n";

mail($to,$subject,$message,$headers);
echo 1;