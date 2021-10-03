<?php
    if (!isset($_SERVER['PHP_AUTH_USER'])) {
            header("WWW-Authenticate: Basic realm=\"Private Area\"");
            header("HTTP/1.0 401 Unauthorized");
            print "Sorry - you need valid credentials granted access to the private area!\n";
            exit;
    } else {
            print "Welcome to the private area, {$_SERVER['PHP_AUTH_USER']}- you used {$_SERVER['PHP_AUTH_PW']} as your password.";
    }
?>
