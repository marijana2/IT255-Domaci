<?php
header('Access-Control-Allow-Methods: GET, POST');
include("functions.php");

if isset($_POST['naziv_model']) && isset($_POST['broj_sedista'])  && isset($_POST['id'])
{

$naziv_model = $_POST['naziv_model'];
$broj_sedista = $_POST['broj_sedista'];
$id = intval($_POST['id']);
echo updateBus($naziv_model,$broj_sedista,$id);
}
?>
