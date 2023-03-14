<?php
require_once('php/Extensions.php');

if(isset($_POST['company_name']) && $_POST['phone'] && $_POST['email'] && $_POST['description']){
    $connect = ConnectToServer();
    $company_name = Clean($_POST['company_name'],100);
    $phone = Clean($_POST['phone'],30);
    $email = Clean($_POST['email'],100);
    $description = Clean($_POST['description'],200);
    
    $query_insert = "INSERT INTO Company_list (company_name, phone, email, description) VALUES ('$company_name','$phone','$email','$description')";

    $successful = mysqli_query($connect,$query_insert);
    if($successful){
        $text = "Информация принята";
    }
    else {
        $text = "Ошибка добавления данных!";
    }
    echo Alert($text);
    header("Refresh: 0; url='index.html'");
    mysqli_close($connect);
    exit;
}


//

//CREATE DATABASE TestDb_Nemtsev DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_unicode_ci

// CREATE TABLE TestDb_Nemtsev.Company_list (company_id INT NOT NULL , company_name VARCHAR(100) NULL , phone VARCHAR(30) NULL, email VARCHAR(100) NULL, description VARCHAR(200) NULL, PRIMARY KEY (company_id)) ENGINE = InnoDB;
// CREATE TABLE TestDb_Nemtsev.Subscribe_list (id INT NOT NULL AUTO_INCREMENT , email VARCHAR(100) NULL , PRIMARY KEY (id)) ENGINE = InnoDB;




