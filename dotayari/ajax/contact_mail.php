<?php
$allData = $_POST['allData2'];
parse_str($allData, $reserv);

//print_r($reserv);

$to = 'mamun@enhancedgroupbd.com';
$subject = 'User Query';

$message = '<strong>Name : </strong>'.$reserv['con_name'].'<br/>';
$message .= $reserv['con_message'].'<br/>';

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: <'.$reserv['con_email'].'>' . "\r\n";

mail($to,$subject,$message,$headers);
echo 1;