<?php
require_once('php/Extensions.php');

if(isset($_POST['email'])){
    $connect = ConnectToServer();
    $email = Clean($_POST['email'],100);

    //проверка на наличие почты в таблице
    $query = "SELECT email FROM Subscribe_list WHERE email LIKE '$email'";
    $answer = mysqli_query($connect,$query);
    $num_rows = mysqli_num_rows($answer);
    if($num_rows){
        $text = "Вы уже подписаны!";
    }
    else {
        $query_insert = "INSERT INTO Subscribe_list (email) VALUES ('$email')";
        $successful = mysqli_query($connect,$query_insert);
        if($successful){
            $text = "Вы подписаны!";
        }
        else {
            $text = "Ошибка добавления данных!";
        }
    }
    echo Alert($text);
    header("Refresh: 0; url='index.html'");
    mysqli_close($connect);
    exit;
}