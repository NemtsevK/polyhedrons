<?php
function ConnectToServer()
{
    $connect = mysqli_connect("localhost", "o917705j_jay", "741712Jay", "o917705j_jay");

    if (!$connect) {
        echo "Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error();
        exit;
    }
    mysqli_set_charset($connect, "utf8");

    return $connect;
}
