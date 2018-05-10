<?php

$texto  = "<b>Nombre:</b> " . $_POST['nombre'] . "<br />";
$texto .= "<b>Correo:</b> " . $_POST['correo'] . "<br />";
$texto  = "<b>Asunto:</b> " . $_POST['asunto'] . "<br />";
$texto .= "<b>Contenido:</b> " . $_POST['contenido'] . "<br />";

$headers = "From: " . $correo . "\r\nX-Mailer: php";
if(mail("contacto@bearsoft.in", $asunto, $texto)){
  $response = "ok";
}else{
  $response = "error";
}
echo json_encode(array("response" => $response));
?>