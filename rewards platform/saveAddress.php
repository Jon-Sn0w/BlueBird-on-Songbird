<?php
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Origin: *'); // or specify the domain instead of *
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$address = $_POST["address"];
	$file = "registeredUsers.txt";
	
	// Check if address already exists in the file
	$existingAddresses = file_get_contents($file);
	if (strpos($existingAddresses, $address) !== false) {
		echo json_encode(["error" => "Address already registered"]);
		exit;
	}
	
	file_put_contents($file, $address . PHP_EOL, FILE_APPEND);
	echo json_encode(["message" => "Address saved successfully"]);
}
?>
