-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 25, 2017 at 05:05 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `angular`
--

-- --------------------------------------------------------

--
-- Table structure for table `dz10`
--

CREATE TABLE `dz10` (
  `ime` varchar(60) NOT NULL,
  `prezime` varchar(60) NOT NULL,
  `korisnicko ime` varchar(60) NOT NULL,
  `sifra` varchar(60) NOT NULL,
  `email` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dz10`
--

INSERT INTO `dz10` (`ime`, `prezime`, `korisnicko ime`, `sifra`, `email`) VALUES
('Milos', 'Markovic', 'milos12', '1234', 'milos12@gmail.com'),
('Katarina', 'Tomasevic', 'kacatom', '456', 'kacatom12@gmail.com'),
('Sr?an', 'Stojadinovic', 'srdjanst', '678', 'srdjanst@gmail.com'),
('Sr?an', 'Stojadinovic', 'srdjanst12', 'daseftg678', 'srdjanst@gmail.com'),
('Milica', '?or?evi?', 'milicdj', '9ujkn', 'milicadj@gmail.com'),
('Milica', 'Djor?evi?', 'milicdj', '9ujkn', 'milicadj@gmail.com');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
