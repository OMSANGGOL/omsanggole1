-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 11, 2022 at 01:02 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `2228052`
--

-- --------------------------------------------------------

--
-- Table structure for table `weather`
--

CREATE TABLE `weather` (
  `weather_temperature` float NOT NULL,
  `weather_Wind` float NOT NULL,
  `weather_When` datetime NOT NULL,
  `Humidity` float NOT NULL,
  `pressure` float NOT NULL,
  `weather_description` varchar(20) NOT NULL,
  `icon` varchar(20) NOT NULL,
  `city` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `weather`
--

INSERT INTO `weather` (`weather_temperature`, `weather_Wind`, `weather_When`, `Humidity`, `pressure`, `weather_description`, `icon`, `city`) VALUES
(27.12, 3.09, '2022-08-11 16:12:29', 69, 1008, 'broken clouds', '04d', 'Kathmandu'),
(14.53, 1.7, '2022-08-11 16:13:10', 90, 1013, 'clear sky', '01n', 'Amber Vall'),
(0, 0, '2022-08-11 16:13:33', 0, 0, '', '', ''),
(14.53, 1.7, '2022-08-11 16:13:54', 90, 1013, 'clear sky', '01n', 'Amber Vall'),
(27.12, 3.09, '2022-08-11 16:14:04', 69, 1008, 'broken clouds', '04d', 'Kathmandu'),
(14.53, 1.7, '2022-08-11 16:14:55', 90, 1013, 'clear sky', '01n', 'Amber Vall'),
(14.4, 1.78, '2022-08-11 16:15:33', 86, 1023, 'broken clouds', '04n', 'Pine Creek'),
(14.4, 1.78, '2022-08-11 16:19:18', 86, 1023, 'broken clouds', '04n', 'Pine Creek'),
(14.4, 1.78, '2022-08-11 16:20:09', 86, 1023, 'broken clouds', '04n', 'Pine Creek'),
(14.4, 1.78, '2022-08-11 16:20:33', 86, 1023, 'broken clouds', '04n', 'Pine Creek'),
(14.4, 1.78, '2022-08-11 16:20:53', 86, 1023, 'broken clouds', '04n', 'Pine Creek'),
(14.4, 1.78, '2022-08-11 16:26:50', 86, 1023, 'broken clouds', '04n', 'Pine Creek'),
(14.4, 1.78, '2022-08-11 16:33:46', 86, 1023, 'broken clouds', '04n', 'Pine Creek'),
(14.4, 1.78, '2022-08-11 16:33:59', 86, 1023, 'broken clouds', '04n', 'Pine Creek');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
