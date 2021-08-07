<?php

$to = 'cork@ukr.net';

$name = htmlspecialchars($_POST["your_name"]);
$phone = htmlspecialchars($_POST["your_phone"]);
$page = htmlspecialchars($_POST["page"]);


$message_to_myemail = "Здравствуйте! 
Вашей контактной формой было отправлено сообщение!

Помогите выбрать экран

Имя отправителя: $name 
Номер телефона: $phone

Сообщение отправлено со страницы: $page
";

if (mail($to, "Перезвоните мне!", $message_to_myemail, "Content-type:text/plain; charset = UTF-8\r\n")) 
	{ 
        http_response_code(200);
    echo "Данные отправлены.";
    }
    else {
        http_response_code(400);
    echo "Ошибка. Данные не отправлены.";
    }

?>