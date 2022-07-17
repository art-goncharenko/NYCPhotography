<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/setLanguage');
    $mail->IsHTML(true);

    //letter from
    $mail->setFrom('photographer@nyc.com', 'NYC Photographer');
    //send to
    $mail->addAddress('gonchirinka@gmail.com');
    //topic
    $mail->Subject = 'New photo shoot request!';

    $body = <h1> New request</h1>;

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Name:</strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>Email:</strong> '.$_POST['email'].'</p>';
    }
    if(trim(!empty($_POST['message']))){
        $body.='<p><strong>Message:</strong> '.$_POST['message'].'</p>';
    }

    $mail ->Body = $body;

    //sending
    if (!$mail->send()){
        $message = 'Error';
    } else {
            $message = 'Success';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);

    ?>