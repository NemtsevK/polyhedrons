<?php
require_once('../php/Extensions.php');

if(isset($_GET['polyhedrons'])){
    $connect = ConnectToServer();
    $OUTPUT = null;
    $query_list = "SELECT type_id
        ,name_rus
        ,name_eng
        ,image
        ,(SELECT COUNT(*) FROM polyhedrons_list b WHERE a.type_id = b.type_id) AS count_polyhedron
        FROM polyhedrons_type a
        WHERE type_id > 0";

    $answer = mysqli_query($connect,$query_list);
    $num_rows = mysqli_num_rows($answer);
    if($num_rows){
        $OUTPUT .= "<div class='polyhedron-block'>";
        while($row = mysqli_fetch_assoc($answer)){
            $type_id = $row['type_id'];
            $name_rus = $row['name_rus'];
            $name_eng = $row['name_eng'];
            $image_link = $row['image'];
            $count_polyhedron = $row['count_polyhedron'];
            $image = "<img class='polyhedron-block__image' src='img/polyhedrons/$image_link' alt='' title='$name_rus'>";

            $OUTPUT .= "<div class='polyhedron-block__item'>";
            $OUTPUT .= $image;
            $OUTPUT .= "<p class='polyhedron-block__title'>$name_rus</p>";
            $OUTPUT .= "<p class='polyhedron-block__title'>Всего: $count_polyhedron</p>";
            $OUTPUT .= "</div>";

        }
        $OUTPUT .= "</div>";
    }

    $response = ['table' => $OUTPUT,];
    echo json_encode($response);
    mysqli_close($connect);
}