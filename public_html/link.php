<?php
/**
 * Created by PhpStorm.
 * User: harrisonchow
 * Date: 5/15/16
 * Time: 1:28 AM
 */

$linkTo = $_GET['link'];
switch ($linkTo) {
    case "facebook":
        $url = "https://www.facebook.com/csayorku/";
        break;
    case "twitter":
        $url = "https://twitter.com/csayorku";
        break;
    case "instagram":
        $url = "https://www.instagram.com/csayorku/";
        break;
    case "mail":
    case "email":
        $url = "mailto:csa.york@gmail.com";
        break;
    case "home":
    default:
        $url = "https://csayork.herokuapp.com/";
}

header("Location: " . $url);
exit;
?>