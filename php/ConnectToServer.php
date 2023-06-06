<?php
function ConnectToServer()
{
    if($_SERVER['SERVER_NAME']=='localhost'){
        $host = "localhost";
        $user = "root";
        $password = "";
        $database = "geometry";
    } else if($_SERVER['SERVER_NAME']=='o917705j.beget.tech'){
        $host = "localhost";
        $user = "o917705j_jay";
        $password = "741712Jay";
        $database = "o917705j_jay";
    } else {
        echo "Неизвестный сервер";
        exit;
    }
    $connect = mysqli_connect($host, $user, $password, $database);

    if (!$connect) {
        echo "Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error();
        exit;
    }
    mysqli_set_charset($connect, "utf8");

    return $connect;
}
