<?php

$to = 'cork@ukr.net';

$page = htmlspecialchars($_POST["page"]);
$pixelSize = htmlspecialchars($_POST["pixelSize"]);
$widthScreen = htmlspecialchars($_POST["widthScreen"]);
$heightScreen = htmlspecialchars($_POST["heightScreen"]);
$yourName = htmlspecialchars($_POST["your_name"]);
$yourPhone = htmlspecialchars($_POST["your_phone"]);
$metric = htmlspecialchars($_POST["metric"]);



$message_to_myemail = "Здравствуйте! 
Вашей контактной формой было отправлено сообщение! 
Имя отправителя: $yourName 
Номер телефона: $yourPhone
Интересует расчет стоимости изделия: $page. 
Размеры: $pixelSize ;
Высота экрана: $heightScreen $metric ;
Ширина  экрана: $widthScreen $metric ;
";

if (mail($to, "Расчитайте стоимость экрана", $message_to_myemail, "Content-type:text/plain; charset = UTF-8\r\n")) 
	{ 
        http_response_code(200);
    echo "Данные отправлены.";
    }
    else {
        http_response_code(400);
    echo "Ошибка. Данные не отправлены.";
    }

?>