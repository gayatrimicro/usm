<?php
/*
This page is cretaed to send the mail 
*/
ob_start();
$fname = $_POST["fname"];
$lname = $_POST["lname"];
$org = $_POST["organization"]; 
$add = $_POST["add"];
$phone = $_POST["phone"];
$message = $_POST["comments"];
$email = $_POST["Email"];

$to = " 	uspm@emirates.net.ae,creator@gayatrimicrosystems.com";
$subject = "Contact details to Union Medway";
$message = "
Name: $fname $lname \n
Organization: $org \n
Address: $add\n
Phone: $phone\n
Comments: $message \n 
Email: $email
";

$from = "$email";
$headers = "From: $from";
mail($to,$subject,$message,$headers);
header("Location: http://www.unionspecialmedway.com/thanku.htm");
?>
