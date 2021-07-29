<meta charset="UTF-8" />

<?php

$to = 'cork@ukr.net';

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

if (mail($to, "Обратная связь", $message_to_myemail, "Content-type:text/plain; charset = UTF-8\r\n")) 
{ 
        ?>
		<script>
				alert('Сообщение успешно отправлено');
				
				document.location.href='/';
				
				</script>
				<?php
    }
    else {
        ?>
		<script>
            alert('Ошибка. Сообщение не отправлено!');
			document.location.href='/';
        </script>
		<?php
    }

?>