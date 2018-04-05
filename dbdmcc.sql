-- phpMyAdmin SQL Dump
-- version 3.4.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 05, 2018 at 04:42 PM
-- Server version: 5.5.16
-- PHP Version: 5.3.8

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `dbdmcc`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbladmin`
--

CREATE TABLE IF NOT EXISTS `tbladmin` (
  `intAdminNo` int(11) NOT NULL AUTO_INCREMENT,
  `strFName` varchar(50) NOT NULL,
  `strMName` varchar(50) NOT NULL,
  `strLName` varchar(50) NOT NULL,
  `intClinicNo` int(11) NOT NULL,
  `strEmail` varchar(50) NOT NULL,
  `strPassword` varchar(50) NOT NULL,
  PRIMARY KEY (`intAdminNo`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `tbladmin`
--

INSERT INTO `tbladmin` (`intAdminNo`, `strFName`, `strMName`, `strLName`, `intClinicNo`, `strEmail`, `strPassword`) VALUES
(1, 'Vernyl', 'Critica', 'Cortez', 1, 'vernylcc@gmail.com', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `tblclinic`
--

CREATE TABLE IF NOT EXISTS `tblclinic` (
  `intClinicNo` int(11) NOT NULL AUTO_INCREMENT,
  `strLocation` varchar(50) NOT NULL,
  PRIMARY KEY (`intClinicNo`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `tblclinic`
--

INSERT INTO `tblclinic` (`intClinicNo`, `strLocation`) VALUES
(1, 'Sta. Maria, Bulacan'),
(2, 'Intramuros, Manila');

-- --------------------------------------------------------

--
-- Table structure for table `tbldentist`
--

CREATE TABLE IF NOT EXISTS `tbldentist` (
  `intDentistNo` int(11) NOT NULL AUTO_INCREMENT,
  `strDentistFname` varchar(50) NOT NULL,
  `strDentistMname` varchar(50) NOT NULL,
  `strDentistLname` varchar(50) NOT NULL,
  `intDentistStatus` int(11) NOT NULL DEFAULT '1',
  `strGender` varchar(50) NOT NULL,
  PRIMARY KEY (`intDentistNo`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `tbldentist`
--

INSERT INTO `tbldentist` (`intDentistNo`, `strDentistFname`, `strDentistMname`, `strDentistLname`, `intDentistStatus`, `strGender`) VALUES
(1, 'Vernyl', 'Critica', 'Cortez', 1, 'Female'),
(2, 'Jason', 'Monti', 'Santos', 1, 'Male');

-- --------------------------------------------------------

--
-- Table structure for table `tblpatient`
--

CREATE TABLE IF NOT EXISTS `tblpatient` (
  `intPatientNo` int(11) NOT NULL AUTO_INCREMENT,
  `strPatientFname` varchar(50) NOT NULL,
  `strPatientMname` varchar(50) NOT NULL,
  `strPatientLname` varchar(50) NOT NULL,
  `strPatientAddress` varchar(50) NOT NULL,
  `strPatientPhone` varchar(50) NOT NULL,
  `strPatientMobile` varchar(50) NOT NULL,
  `intPatientStatus` int(11) NOT NULL DEFAULT '1',
  `dtmBirthday` date NOT NULL,
  `strGender` varchar(6) NOT NULL,
  `strEmail` varchar(50) NOT NULL,
  `strPassword` varchar(50) NOT NULL,
  PRIMARY KEY (`intPatientNo`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `tblpatient`
--

INSERT INTO `tblpatient` (`intPatientNo`, `strPatientFname`, `strPatientMname`, `strPatientLname`, `strPatientAddress`, `strPatientPhone`, `strPatientMobile`, `intPatientStatus`, `dtmBirthday`, `strGender`, `strEmail`, `strPassword`) VALUES
(1, 'Mary', 'Hesido', 'Espin', 'QC', '123123', '0928374642', 1, '2018-04-03', 'Female', 'mj@gmail.com', 'patient'),
(2, 'Xander', 'p', 'Pijan', 'Mandaluyong', '21312', '092312323', 1, '0000-00-00', 'male', 'xanderp@gmail.com', 'patient'),
(3, 'asd', 'wqsd', 'qasd', 'asd', 'skjdo', 'oishfosj', 1, '0000-00-00', 'female', 'sads@gmail.com', 'sd'),
(4, 'asd', 'wqsd', 'qasd', 'asd', 'skjdo', 'oishfosj', 1, '0000-00-00', 'female', 'sads@gmail.com', 'sd'),
(5, 'asd', 'wqsd', 'qasd', 'asd', 'skjdo', 'oishfosj', 1, '2012-02-01', 'female', 'sads@gmail.com', 'sd');

-- --------------------------------------------------------

--
-- Table structure for table `tblservices`
--

CREATE TABLE IF NOT EXISTS `tblservices` (
  `intServiceNo` int(11) NOT NULL AUTO_INCREMENT,
  `strServiceName` varchar(50) NOT NULL,
  `fltReferencePrice` double(6,2) NOT NULL,
  `strServiceDescription` varchar(50) NOT NULL,
  PRIMARY KEY (`intServiceNo`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `tblservices`
--

INSERT INTO `tblservices` (`intServiceNo`, `strServiceName`, `fltReferencePrice`, `strServiceDescription`) VALUES
(1, 'Tooth Extraction', 350.00, 'Para sa mga bulok na ngipin'),
(2, 'Tooth Restoration', 400.00, 'Kapag may butas ang ngipin'),
(3, 'Orthodontic Braces Installation', 5000.00, 'Para sa mga social climber'),
(4, 'Cleaning', 350.00, 'Removes all Dirt'),
(5, 'Root Canal', 5000.00, 'For deeper infection');

-- --------------------------------------------------------

--
-- Table structure for table `tblteeth`
--

CREATE TABLE IF NOT EXISTS `tblteeth` (
  `intTeethId` int(11) NOT NULL AUTO_INCREMENT,
  `intPatientNo` int(11) NOT NULL,
  `int11` int(11) NOT NULL DEFAULT '1',
  `int12` int(11) NOT NULL DEFAULT '1',
  `int13` int(11) NOT NULL DEFAULT '1',
  `int14` int(11) NOT NULL DEFAULT '1',
  `int15` int(11) NOT NULL DEFAULT '1',
  `int16` int(11) NOT NULL DEFAULT '1',
  `int17` int(11) NOT NULL DEFAULT '1',
  `int18` int(11) NOT NULL DEFAULT '1',
  `int21` int(11) NOT NULL DEFAULT '1',
  `int22` int(11) NOT NULL DEFAULT '1',
  `int23` int(11) NOT NULL DEFAULT '1',
  `int24` int(11) NOT NULL DEFAULT '1',
  `int25` int(11) NOT NULL DEFAULT '1',
  `int26` int(11) NOT NULL DEFAULT '1',
  `int27` int(11) NOT NULL DEFAULT '1',
  `int28` int(11) NOT NULL DEFAULT '1',
  `int31` int(11) NOT NULL DEFAULT '1',
  `int32` int(11) NOT NULL DEFAULT '1',
  `int33` int(11) NOT NULL DEFAULT '1',
  `int34` int(11) NOT NULL DEFAULT '1',
  `int35` int(11) NOT NULL DEFAULT '1',
  `int36` int(11) NOT NULL DEFAULT '1',
  `int37` int(11) NOT NULL DEFAULT '1',
  `int38` int(11) NOT NULL DEFAULT '1',
  `int41` int(11) NOT NULL DEFAULT '1',
  `int42` int(11) NOT NULL DEFAULT '1',
  `int43` int(11) NOT NULL DEFAULT '1',
  `int44` int(11) NOT NULL DEFAULT '1',
  `int45` int(11) NOT NULL DEFAULT '1',
  `int46` int(11) NOT NULL DEFAULT '1',
  `int47` int(11) NOT NULL DEFAULT '1',
  `int48` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`intTeethId`),
  UNIQUE KEY `intPatientNo` (`intPatientNo`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `tblteeth`
--

INSERT INTO `tblteeth` (`intTeethId`, `intPatientNo`, `int11`, `int12`, `int13`, `int14`, `int15`, `int16`, `int17`, `int18`, `int21`, `int22`, `int23`, `int24`, `int25`, `int26`, `int27`, `int28`, `int31`, `int32`, `int33`, `int34`, `int35`, `int36`, `int37`, `int38`, `int41`, `int42`, `int43`, `int44`, `int45`, `int46`, `int47`, `int48`) VALUES
(7, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbltransaction`
--

CREATE TABLE IF NOT EXISTS `tbltransaction` (
  `intTransactionNo` int(11) NOT NULL AUTO_INCREMENT,
  `intPatientNo` int(11) NOT NULL,
  `intDentistNo` int(11) DEFAULT NULL,
  `intClinicNo` int(11) NOT NULL,
  `dtmDateTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `intORNo` int(11) DEFAULT NULL,
  `intStatus` int(11) NOT NULL DEFAULT '1',
  `strRemarks` varchar(50) NOT NULL,
  PRIMARY KEY (`intTransactionNo`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `tbltransaction`
--

INSERT INTO `tbltransaction` (`intTransactionNo`, `intPatientNo`, `intDentistNo`, `intClinicNo`, `dtmDateTime`, `intORNo`, `intStatus`, `strRemarks`) VALUES
(1, 1, 1, 1, '2018-04-05 14:06:02', NULL, 1, 'Tooth Ache');

-- --------------------------------------------------------

--
-- Table structure for table `tbltreatment`
--

CREATE TABLE IF NOT EXISTS `tbltreatment` (
  `intTreatmentNo` int(11) NOT NULL AUTO_INCREMENT,
  `intTransactionNo` int(11) NOT NULL,
  `intServiceNo` int(11) NOT NULL,
  `fltFinalPrice` double(6,2) NOT NULL,
  `strToothInvolved` varchar(50) NOT NULL,
  PRIMARY KEY (`intTreatmentNo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
