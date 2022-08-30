<?php


// Connect to database
$mysqli = new mysqli("localhost","root","","2228052");
if ($mysqli -> connect_error) {
echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
exit();
}

include('data-import.php');


$sql = "SELECT * FROM weather
WHERE city = '{$_GET['city']}'
AND weather_When >= DATE_SUB(NOW(), INTERVAL 10 SECOND)
ORDER BY weather_When DESC limit 1";
$result = $mysqli -> query($sql);
$row = $result -> fetch_assoc();
print json_encode($row);

// Free result set and close connection
$result -> free_result();
$mysqli -> close();

?>