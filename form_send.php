<meta charset="UTF-8" />

<?php

$to = 'wijani8508@activesniper.com';

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
Размеры: $pixelSize
Высота экрана: $heightScreen $metric
Ширина  экрана: $widthScreen $metric
";


mail($to, "Обратная связь", $message_to_myemail, "Content-type:text/plain; charset = UTF-8");
alert("Ваше сообщение отправлено")