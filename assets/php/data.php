<?php
// Database connection

if(isset($_POST['submit'])){
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
}
$servername = "locallhot";
$username = "root";
$password ="";
$dbname = "portfolio";
$conn = new mysqli($servername, $username, $password, $dbname);
if($conn->connect_error){
    die('Connection Failed : '.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into visitor(Name, Email, Messages) values(?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $message);
    if ($stmt->execute()) {
        echo 'success'; // Send success signal back to JavaScript
      } else {
        echo 'error'; // Send error signal back to JavaScript
      }
    
      // Close the prepared statement and connection
      $stmt->close();
      $conn->close();
}
?>