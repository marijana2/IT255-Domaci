<?php
header("Access-Control-Allow-Origin: *");
	$servername = "localhost";
	$username = "root";
	$password = "";
	$db = "marijana";
	$conn = new mysqli($servername, $username, $password, $db);

	$ime = $_POST['ime'];
	$prezime = $_POST['prezime'];
		
	$stmt = $conn->prepare("INSERT INTO test (ime, prezime) VALUES (?, ?)");
	$stmt->bind_param("ss", $ime, $prezime);
	$stmt->execute();
	echo "ok";

?>