<?php

    $serverName = 'localhost';
    $username = 'cuperso1_root';
    $passwd = 'helloworld';
    $database = 'cuperso1_SchoolInfo';
    $conn = mysqli_connect($serverName, $username, $passwd, $database);
    if ($conn){
       // echo 'OK!';
    }
    else{
        echo "Something Wrong!";
    }

?>