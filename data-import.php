<?php

$sql = "SELECT *
FROM weather
WHERE city = '{$_GET['city']}'
AND weather_When >= DATE_SUB(NOW(), INTERVAL 10 SECOND)
ORDER BY weather_When DESC limit 1";

$result = $mysqli -> query($sql);

// If 0 record found
if ($result->num_rows == 0) {
            $url = 'https://api.openweathermap.org/data/2.5/weather?q=' . $_GET['city'] . '&appid=5bb220e4747fc6077148d5d1ae66f463&units=metric';
        // Get data from openweathermap and store in JSON object
        $data = file_get_contents($url);
        $json = json_decode($data, true);
        date_default_timezone_set('Asia/Kathmandu'); 
        // Fetch required fields
        $weather_temperature = $json['main']['temp'];
        $weather_Wind = $json['wind']['speed'];
        $weather_When = date("Y-m-d H:i:s"); // now
        $Humidity = $json['main']['humidity'];
        $pressure = $json['main']['pressure'];
        $weather_description = $json['weather'][0]['description'];
        $icon = $json['weather'][0]['icon'];

        $city = $json['name'];


        // inserting values in weather table
        $sql = "INSERT INTO weather (weather_description, weather_temperature, weather_Wind, weather_When,Humidity,pressure,icon,city)
        VALUES('{$weather_description}', '{$weather_temperature}', '{$weather_Wind}', '{$weather_When}','{$Humidity}','{$pressure}','{$icon}','{$city}')";

}

if (!$mysqli -> query($sql)) {
    echo("<h4>SQL error description: " . $mysqli -> error . "</h4>");
    
    }

?>