<?php
//get data from form  

$name = $_POST['name'];
$email= $_POST['email'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$message= $_POST['message'];
$to = "nishantbharmal07@gmail.com";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Phone = " . $phone . "\r\n Subject =" . $subject . "\r\n Message =" . $message;
$headers = "From: nishantbharmal07@gmail.com" . "\r\n" .
"CC: nishantwebsitedesigner@gmail.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>