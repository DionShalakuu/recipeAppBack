-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 09, 2024 at 07:10 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recipes_finder`
--

-- --------------------------------------------------------

--
-- Table structure for table `ingredient`
--

CREATE TABLE `ingredient` (
  `id` varchar(36) NOT NULL,
  `ingredient` varchar(255) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `unit_id` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ingredient`
--

INSERT INTO `ingredient` (`id`, `ingredient`, `amount`, `unit_id`) VALUES
('0884d82e-566c-4736-ab5a-1398c46a2a99', '1 tablespoon mayonnaise', NULL, 'de0cf69b-de26-11ee-8269-6c2408929a32'),
('3ac2d0ae-de39-11ee-8269-6c2408929a32', 'Dion', 1, 'de0cf69b-de26-11ee-8269-6c2408929a32'),
('6148372f-fbe2-48e5-ac77-b122cfb7ad9a', '1 teaspoon yellow mustard', NULL, 'de0cf69b-de26-11ee-8269-6c2408929a32'),
('b343d78c-c164-4e01-ab25-9c4775aea43c', '1 tablespoon ketchup', NULL, 'de0cf69b-de26-11ee-8269-6c2408929a32');

-- --------------------------------------------------------

--
-- Table structure for table `recipe`
--

CREATE TABLE `recipe` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `instructions` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recipe`
--

INSERT INTO `recipe` (`id`, `name`, `description`, `instructions`) VALUES
('041c8cc3-a84e-4e14-bdab-01af65f33c9d', 'test', '444', '2323'),
('6e4c6dec-462d-4bdc-b401-3f800b8e7d61', 'Loaded Waffle Fries', 'These loaded waffle fries are topped with all of your favorite bacon cheeseburger fixings—burger-seasoned beef, Cheddar, bacon, and all the right condiments. This serves 2 as a main dish or 6 for a game day snack. If you cannot find Worcestershire pub burger seasoning, just use Montreal steak seasoning.', 'Whisk ketchup, mayonnaise, mustard, and dill pickle relish in a small bowl. Set sauce aside.'),
('7f32d95b-6346-4835-bc3c-b71170a94c6e', 'Denis', 'These loaded waffle fries are topped with all of your favorite bacon cheeseburger fixings—burger-seasoned beef, Cheddar, bacon, and all the right condiments. This serves 2 as a main dish or 6 for a game day snack. If you cannot find Worcestershire pub burger seasoning, just use Montreal steak seasoning.', 'ABA BURGEr.'),
('8b945ec2-241d-4679-8793-4359c0bb78b1', 'Loaded Waffle Fries', 'These loaded waffle fries are topped with all of your favorite bacon cheeseburger fixings—burger-seasoned beef, Cheddar, bacon, and all the right condiments. This serves 2 as a main dish or 6 for a game day snack. If you cannot find Worcestershire pub burger seasoning, just use Montreal steak seasoning.', 'Whisk ketchup, mayonnaise, mustard, and dill pickle relish in a small bowl. Set sauce aside.'),
('aa634ddd-53fd-4248-9810-876faa7ae39e', 'Dion Burger', 'These loaded waffle fries are topped with all of your favorite bacon cheeseburger fixings—burger-seasoned beef, Cheddar, bacon, and all the right condiments. This serves 2 as a main dish or 6 for a game day snack. If you cannot find Worcestershire pub burger seasoning, just use Montreal steak seasoning.', 'ABA BURGEr.'),
('d57abf1b-04ad-44de-b008-ba7c1a81cec6', 'Loaded Waffle Fries', 'These loaded waffle fries are topped with all of your favorite bacon cheeseburger fixings—burger-seasoned beef, Cheddar, bacon, and all the right condiments. This serves 2 as a main dish or 6 for a game day snack. If you cannot find Worcestershire pub burger seasoning, just use Montreal steak seasoning.', 'Whisk ketchup, mayonnaise, mustard, and dill pickle relish in a small bowl. Set sauce aside.'),
('f82fba70-6c2b-49e4-88b2-7001da73fb0f', 'Loaded Waffle Fries 2222', 'These loaded waffle fries are topped with all of your favorite bacon cheeseburger fixings—burger-seasoned beef, Cheddar, bacon, and all the right condiments. This serves 2 as a main dish or 6 for a game day snack. If you cannot find Worcestershire pub burger seasoning, just use Montreal steak seasoning.', 'Whisk ketchup, mayonnaise, mustard, and dill pickle relish in a small bowl. Set sauce aside.');

-- --------------------------------------------------------

--
-- Table structure for table `recipe_ingredient`
--

CREATE TABLE `recipe_ingredient` (
  `id` varchar(36) NOT NULL,
  `recipe_id` varchar(40) DEFAULT NULL,
  `ingredient_id` varchar(40) DEFAULT NULL,
  `unit_id` varchar(40) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recipe_ingredient`
--

INSERT INTO `recipe_ingredient` (`id`, `recipe_id`, `ingredient_id`, `unit_id`, `amount`) VALUES
('03ef7a5e-7d2a-435c-9a3f-fe118cc99b50', '041c8cc3-a84e-4e14-bdab-01af65f33c9d', '0884d82e-566c-4736-ab5a-1398c46a2a99', NULL, NULL),
('04363c4a-bf21-4055-a480-cc7d2aa5d079', 'aa634ddd-53fd-4248-9810-876faa7ae39e', '0884d82e-566c-4736-ab5a-1398c46a2a99', 'de0cf69b-de26-11ee-8269-6c2408929a32', NULL),
('11515d4f-0a7c-41b4-9533-3b461476bb9b', '7f32d95b-6346-4835-bc3c-b71170a94c6e', '3ac2d0ae-de39-11ee-8269-6c2408929a32', 'de0cf69b-de26-11ee-8269-6c2408929a32', NULL),
('1b5d773e-8e64-4d65-b8b7-ccf12dcf1a56', 'f82fba70-6c2b-49e4-88b2-7001da73fb0f', '0884d82e-566c-4736-ab5a-1398c46a2a99', 'de0cf69b-de26-11ee-8269-6c2408929a32', NULL),
('54a01afa-9379-4dbf-bf6b-3754169fc361', '8b945ec2-241d-4679-8793-4359c0bb78b1', '0884d82e-566c-4736-ab5a-1398c46a2a99', 'de0cf69b-de26-11ee-8269-6c2408929a32', NULL),
('868dd104-c7a4-4315-ab41-13b52e48d0c0', 'aa634ddd-53fd-4248-9810-876faa7ae39e', '6148372f-fbe2-48e5-ac77-b122cfb7ad9a', 'de0cf69b-de26-11ee-8269-6c2408929a32', NULL),
('ab63c97e-e9bc-49b1-9330-85bc9f6a0a2b', '7f32d95b-6346-4835-bc3c-b71170a94c6e', '0884d82e-566c-4736-ab5a-1398c46a2a99', 'de0cf69b-de26-11ee-8269-6c2408929a32', NULL),
('bc65b058-0b73-4a2e-b7a3-cb1d4634b5e5', '8b945ec2-241d-4679-8793-4359c0bb78b1', '6148372f-fbe2-48e5-ac77-b122cfb7ad9a', 'de0cf69b-de26-11ee-8269-6c2408929a32', NULL),
('fad0ed6a-053f-4885-80a2-c9e97206620d', 'f82fba70-6c2b-49e4-88b2-7001da73fb0f', '6148372f-fbe2-48e5-ac77-b122cfb7ad9a', 'de0cf69b-de26-11ee-8269-6c2408929a32', NULL),
('feafa10c-02a4-4ec6-8381-b8025fa0b7e0', '041c8cc3-a84e-4e14-bdab-01af65f33c9d', '0884d82e-566c-4736-ab5a-1398c46a2a99', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `unit`
--

CREATE TABLE `unit` (
  `id` varchar(36) NOT NULL,
  `name` varchar(64) DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `unit`
--

INSERT INTO `unit` (`id`, `name`, `description`) VALUES
('de0cf69b-de26-11ee-8269-6c2408929a32', 'tablespoon ', 'tablespoon ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ingredient`
--
ALTER TABLE `ingredient`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe`
--
ALTER TABLE `recipe`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe_ingredient`
--
ALTER TABLE `recipe_ingredient`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `unit`
--
ALTER TABLE `unit`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
