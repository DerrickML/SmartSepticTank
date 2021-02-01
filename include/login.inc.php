<?php

session_start();

if (isset($_POST['submit'])) {
    
    //include database connection
    include_once 'connection.php';
    
    $uid = mysqli_real_escape_string($con, $_POST['uid']);
    $pwd = mysqli_real_escape_string($con, $_POST['pwd']);
    
    // Error handling
    
    //Check if input fields are empty
    if (empty($uid) || empty($pwd))  {
        header("Location: home.php?Login=empty");
        exit();
    } else {
        // Check if username exists in the database
        $sql = "SELECT * FROM users WHERE user_name='$uid'";
        $result = mysqli_query($con, $sql);
        if (mysqli_num_rows($result) < 1) {
            header("Location: ../login.php?Login=Error");
            exit();
        } else {
            // Check if user entered correct password
            if ($row = mysqli_fetch_assoc($result)) {
                // De-hash password from the database
                $hashedPwdCheck = password_verify($pwd, $row['user_pwd']);
                if ($hashedPwdCheck == false) {
                    header("Location: ../home.php?Login=Error");
                    exit(); 
                } elseif ($hashedPwdCheck == true) {
                    // Log in user
                    $_SESSION['u_id'] = $row['user_id'];
                    $_SESSION['u_first'] = $row['user_first'];
                    $_SESSION['u_last'] = $row['user_last'];
                    $_SESSION['u_email'] = $row['user_email'];
                    $_SESSION['u_uname'] = $row['user_name'];
                    
                    header("Location: ..\index.php?Login=Success");
                    exit();
                }
            }
        }
    }
} else {
    header("Location: ../login.php?Login=Error");
    exit();
}





















