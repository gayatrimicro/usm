<?php
date_default_timezone_set('Asia/Calcutta');
if(isset($_GET['mail'])){
		$email = $_GET['mail'];
		$fullname=$_GET['fullname'];
		$address=$_GET['address'];
		$phone=$_GET['phone'];
		$enq=$_GET['message'];
		$subject = "Contact Form Union Special Medway";
		$to = 'ram@gmicro.us,sales@unionspecialmedway.com';
		$message = "\n
		Name : $fullname \n
		Address : $address \n
		Email : $email \n
		Phone : $phone \n
		Enquiry : $enq";
		$from = $_GET['fullname'];
		$headers = "From: $from";
		mail($to,$subject,$message,$headers);
		echo'success';	
}
else 
{
	echo'error';	
}
?>