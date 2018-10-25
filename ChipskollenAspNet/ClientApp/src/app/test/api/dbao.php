<?php

session_start();

if(isset($_SESSION['user'])) { 
    $user = $_SESSION['user'];

    if($user == 'admin') {
        echo '{
            "message": "This is a secret message only for administrator",
            "success": true   
        }';
    } else {
        echo '{
            "message": "Who the f are you",
            "success": false
        }';
    }
}
else{
    echo '{
        "message": "user not set",
        "success": false   
    }';
}


// SELECT records from userTable where username=sanitizedUsername

?>