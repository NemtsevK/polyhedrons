<?php
function ConnectToServer(){
    $connect = mysqli_connect("localhost", "root", "", "Geometry");

    if (!$connect){
        echo "Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error();
        exit;
    }
    mysqli_set_charset($connect, "utf8");

    return $connect;
}