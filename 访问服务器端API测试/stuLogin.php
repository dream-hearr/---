<?php  
    require "conn.php";

    $stuNum = $_GET['stuNum'];
    $passWord = $_GET['passWord'];
    $back = null;
    $sql = "SELECT stuNum FROM stuInfo WHERE stuNum = '$stuNum' AND passWord = '$passWord'";
    $res = mysqli_query($conn, $sql);
    if ($res->num_rows>0){
        $back =  urlencode('login-true');
        exit(json_encode($back));
    }
    else{
        $back =  urlencode('login-false');
        exit(json_encode($back));
    }

 ?>