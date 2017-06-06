<?php
header('Access-Control-Allow-Methods: GET');
header("Access-Control-Allow-Origin: *");
if($_SERVER['REQUEST_METHOD'] == "OPTIONS"){
	exit();
}
include("functions.php");


echo getBus();


?>
