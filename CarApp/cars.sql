-- phpMyAdmin SQL Dump
-- version 4.2.7
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 29-04-2015 a las 01:27:35
-- Versión del servidor: 5.6.20
-- Versión de PHP: 5.5.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `cars_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brands`
--

CREATE TABLE IF NOT EXISTS brands (
	id INT AUTO_INCREMENT PRIMARY KEY,
	name varchar(100) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=armscii8;

--
-- Estructura de tabla para la tabla `models`
--

CREATE TABLE IF NOT EXISTS models (
	id INT AUTO_INCREMENT PRIMARY KEY,
	name varchar(100) NOT NULL,
	fk_brand_id INT,
	FOREIGN KEY (fk_brand_id) REFERENCES brands(id)
) ENGINE=InnoDB  DEFAULT CHARSET=armscii8;

--
-- Estructura de tabla para la tabla `cars`
--

CREATE TABLE IF NOT EXISTS cars (
	id INT AUTO_INCREMENT PRIMARY KEY,
	color varchar(100) NOT NULL,
	year varchar(100) NOT NULL,
	price varchar(100) NOT NULL,
	fk_model_id INT,
	FOREIGN KEY (fk_model_id) REFERENCES models(id)
) ENGINE=InnoDB  DEFAULT CHARSET=armscii8;

--
-- Volcado de datos para la tabla `brands`
--

INSERT INTO brands (name) VALUES
('Ford'),
('Chevrolet'),
('Fiat'),
('Renault'),
('Toyota'),
('Volkswagen');

--
-- Volcado de datos para la tabla `models`
--

INSERT INTO models (name, fk_brand_id) VALUES
('Focus', 1),
('Mondeo', 1),
('Corsa', 2),
('Astra', 2),
('Tipo', 3),
('Fiorino', 3),
('Clio', 4),
('Kangoo', 4),
('Haylux', 5),
('Corolla', 5),
('Gol Power', 6),
('Suran', 6);

--
-- Volcado de datos para la tabla `cars`
--

INSERT INTO cars (color, year, price, fk_model_id) VALUES
('Red', '2015', '25500', 1),
('Red', '2016', '22300', 1),
('Blue', '2012', '12500', 2),
('Black', '2011', '12100', 2),
('Yellow', '2016', '32500', 3),
('Black', '2011', '21100', 3),
('Blue', '2013', '9500', 4),
('White', '2014', '26700', 4),
('Black', '2013', '19500', 5),
('Cian', '2011', '16800', 5),
('Red', '2009', '12200', 6),
('Red', '2010', '21200', 6),
('Blue', '2012', '32300', 7),
('Black', '2011', '12100', 7),
('Yellow', '2016', '32500', 8),
('Black', '2011', '21100', 8),
('Blue', '2013', '9500', 9),
('White', '2014', '26700', 9),
('Black', '2013', '19500', 10),
('Cian', '2011', '16800', 10),
('Black', '2013', '19500', 11),
('Cian', '2011', '16800', 11),
('Black', '2013', '19500', 12),
('Cian', '2011', '16800', 12);