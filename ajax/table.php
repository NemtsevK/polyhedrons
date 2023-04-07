<?php
require_once('../php/Extensions.php');

$sql_query = new SqlQuery();

if(isset($_GET['polyhedrons'])){
    $connect = ConnectToServer();
    $TABLE = null;
    $query_list = $sql_query -> PolyhedronsList();

    $answer = mysqli_query($connect,$query_list);
    $num_rows = mysqli_num_rows($answer);
    if($num_rows){
        while($row = mysqli_fetch_assoc($answer)){
            $image = null;
            $polyhedra_id = $row['polyhedra_id'];
            $name_rus = $row['name_rus'];
            $name_eng = $row['name_eng'];
            $type_name = $row['type_name_rus'];
            $faces = $row['faces'];
            $edges = $row['edges'];
            $vertices = $row['vertices'];
            $symmetry = $row['symmetry_name_rus'];
            
            $wenninger_number = $row['wenninger_number'];
            $dual_id = $row['dual_id'];
            if(isset($row['image'])){
                $image_link = $row['image'];
                $image = "<img class='table__img' src='img/polyhedrons/$image_link' alt='' title='$name_rus'>";
            }
            

            $TABLE.="<tr>";
            $TABLE.="<td><p class='table__text table__text_center'>$polyhedra_id</p></td>";
            $TABLE.="<td><div class='table__img-wrapper'>$image</div></td>";
            $TABLE.="<td><p class='table__text'>$name_rus</p><p class='table__text table__text_italic'>$name_eng</p></td>";
            $TABLE.="<td><p class='table__text'>$type_name</p></td>";
            $TABLE.="<td><p class='table__text table__text_center'>$faces</p></td>";
            $TABLE.="<td><p class='table__text table__text_center'>$edges</p></td>";
            $TABLE.="<td><p class='table__text table__text_center'>$vertices</p></td>";
            $TABLE.="<td><p class='table__text'>$symmetry</p></td>";
            $TABLE.="<td><p class='table__text table__text_center'>$wenninger_number</p></td>";
            $TABLE.="<td><p class='table__text table__text_center'>$dual_id</p></td>";
            $TABLE.="</tr>";
        }
    }

    $OUTPUT="<table class='table main__table'>";
    $OUTPUT.="<thead>";
    $OUTPUT.="<tr>";
    $OUTPUT.="<th>ID</th>";
    $OUTPUT.="<th></th>";
    $OUTPUT.="<th>Название</th>";
    $OUTPUT.="<th>Семейство</th>";
    $OUTPUT.="<th title='Грани'>Г.</th>";
    $OUTPUT.="<th title='Рёбра'>Р.</th>";
    $OUTPUT.="<th title='Вершины'>В.</th>";
    $OUTPUT.="<th>Симметрия</th>";
    $OUTPUT.="<th title='Номер по книге М.Венниджера'>W</th>";
    $OUTPUT.="<th title='Двойственный'>Д.</th>";
    $OUTPUT.="</tr>";
    $OUTPUT.="</thead>";
    $OUTPUT.="<tbody>";
    $OUTPUT.=$TABLE;
    $OUTPUT.="</tbody>";
    $OUTPUT.="</table>";

    $response = ['table' => $OUTPUT,];
    echo json_encode($response);
    mysqli_close($connect);
}