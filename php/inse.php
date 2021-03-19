<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sant";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO table1 (c1, c2, c3,c4)
VALUES ('John', 'Doe', 'john@example.com','ben')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>