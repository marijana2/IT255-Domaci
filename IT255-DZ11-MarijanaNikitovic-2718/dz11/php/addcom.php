<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
include("functions.php");
include("config.php");

if(isset($_POST['ocena'])  && isset($_POST['komentar']) ){

$ocena = $_POST['ocena'];
$komentar = $_POST['komentar'];


addCom($ocena,$komentar);
}
?>
