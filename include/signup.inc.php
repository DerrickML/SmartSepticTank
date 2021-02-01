<?php

if (isset($_POST['submit'])) {
    
    include_once 'connection.php';
    
    $first = mysqli_real_escape_string($con, $_POST['first']);
    $last = mysqli_real_escape_string($con,$_POST['last']);
    $email = mysqli_real_escape_string($con,$_POST['email']);
    $uname = mysqli_real_escape_string($con,$_POST['uname']);
    $pwd = mysqli_real_escape_string($con,$_POST['pwd']); 
    
    // Error handling
    
    if (empty($first) || empty($last) || empty($email) || empty($uname) || empty($pwd)) {
        header("Location: ../signup.php?signup=empty");
        exit();
    } else {
        // Check validity of input chaacters
        
        // Check if there are characters within first and last that aren't allowed
        if (!preg_match("/^[a-zA-Z]*$/", $first) || !preg_match("/^[a-zA-Z]*$/", $last)) {
            header("Location: ../signup.php?signup=invalid");
            exit();
        } else {
            // Check if email is valid
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                header("Location: ../signup.php?signup=email");
                exit();
            } else {
                // Check if username is already in the database
                $sql = "SELECT * FROM users WHERE user_name='$uname'";
                $result = mysqli_query($con, $sql);
                if (mysqli_num_rows($result) > 0) {
                    header("Location: ../signup.php?signup=userTaken");
                    exit();
                } else {
                    // Hash the password
                    $hashedPwd = password_hash($pwd, PASSWORD_DEFAULT);
                    
                    // Insert user into the database
                    $sql = "INSERT INTO users (user_first, user_last, user_email, user_name, user_pwd) 
                            VALUES ('$first', '$last', '$email', '$uname', '$hashedPwd');";
                    mysqli_query($con, $sql);
                    header("Location: ../signup.php?signup=Success");
                    exit();
                }
            }
        }
    }
    
} else {
    header("Location: ../signup.php");
    exit();
}
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        