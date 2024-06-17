<!-- Start a php code -->
<?php

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
}

// Database connection

$servername = "localhost";
$username = "root";
$password ="";
$dbname = "portfolio_response";
$conn = new mysqli($servername, $username, $password, $dbname);
if($conn->connect_error){
    die('Connection Failed : '.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into visitor_reponse(Name, Email, Messages) values(?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $message);
    $stmt->execute();
    echo "Message Sent Successfully...";
    $stmt->close();
    $conn->close();
}
?>