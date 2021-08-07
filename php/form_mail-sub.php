<?php

$to = 'cork@ukr.net';

$name = htmlspecialchars($_POST["name"]);
$phone = htmlspecialchars($_POST["phone"]);
$email = htmlspecialchars($_POST["email"]);
$comment = htmlspecialchars($_POST["comment"]);



$message_to_myemail = "Здравствуйте! 
Вашей контактной формой было отправлено сообщение!

Хочу подписаться на новости и акции сайта.

Имя отправителя: $name 
Номер телефона: $phone
E-mail: $email

Указан комментарий: $comment
";

if (mail($to, "Подписка на новости сайта", $message_to_myemail, "Content-type:text/plain; charset = UTF-8\r\n")) 
	{ 
        http_response_code(200);
    echo "Данные отправлены.";
    }
    else {
        http_response_code(400);
    echo "Ошибка. Данные не отправлены.";
    }

?>