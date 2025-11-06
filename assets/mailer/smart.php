<?php 

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$question = $_POST['message'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.hostinger.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'test@romerholding.com';                 // Наш логин
$mail->Password = 'S~R8OWVi[5';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('test@romerholding.com', 'Romer Holding');   // От кого письмо 
$mail->addAddress('contact@romerholding.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'User quote';
$mail->Body    = '
	User left data <br>
	Name: ' . $name . ' <br>
	Name: ' . $phone . ' <br>
	E-mail: ' . $email . ' <br>
	Message: ' . $question . '';

	if(!$mail->send()) {
		echo 'Mailer Error: ' . $mail->ErrorInfo;  // Print error message if sending fails
		return false;
	} else {
		echo 'Message has been sent';
		return true;
	}


?>