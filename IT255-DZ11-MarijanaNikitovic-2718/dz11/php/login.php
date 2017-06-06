<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST');
header('Acces-Control-Headers: Origin, Content-Type, X-Auth-Token, Authorization, Token');
header('Content-Type: application/x-www-form-urlencodeds');
include("functions.php");

if(isset($_POST['username']) && isset($_POST['password'])){

$username = $_POST['username'];
$password = $_POST['password'];
echo login($username,$password);

}
?>
