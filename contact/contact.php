<?php
date_default_timezone_set('Asia/Calcutta');
if(isset($_GET['mail'])){
		$email = $_GET['mail'];
		$fullname=$_GET['fullname'];
		$address=$_GET['address'];
		$phone=$_GET['phone'];
		$enq=$_GET['message'];
		$subject = "Contact Form Union Special Medway";
		// $to = 'ram@gmicro.us,sales@unionspecialmedway.com';
		$to = 'content@gmicro.us, seo@gmicro.us';
		$message = "\n
		Name : $fullname \n
		Address : $address \n
		Email : $email \n
		Phone : $phone \n
		Enquiry : $enq";
		$from = $_GET['mail'];
		$headers = "From: Product Inquiry by $email";
		// mail("content@gmicro.us, seo@gmicro.us",$subject,$message,$headers);
		mail($to,$subject,$message,$headers);
		echo'success';	
}
else 
{
	echo'error';	
}
?>