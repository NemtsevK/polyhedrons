<?php
require_once('../php/Extensions.php');

$sql_query = new SqlQuery();
$ext_table = new ExtTable();
if(isset($_GET['polyhedrons'])){
    $connect = ConnectToServer();
    $TABLE = null;
    $query_table = $sql_query -> PolyhedronsList();

    $header_table = [
        'count_row'=>true,
        'polyhedra_id'=>[
            'name' => 'ID', 
        ],
        'image'=>[
            'name' => '',
            'name_full' => 'Изображение',
            'image' => true,
            'link_directory' => 'img/polyhedrons/'
        ],
        'name_rus'=>[
            'name' => 'Название',
            'align' => 'left'
        ],
        'type_name_rus'=>[
            'name' => 'Семейство',
            'align' => 'left'
        ],
        'faces'=>[
            'name' => 'Г.',
            'name_full' => 'Грани',
        ],
        'edges'=>[
            'name' => 'Р.',
            'name_full' => 'Рёбра'
        ],
        'vertices'=>[
            'name' => 'В.',
            'name_full' => 'Вершины'
        ],
        'symmetry_name_rus'=>[
            'name' => 'Симметрия',
            'align' => 'left'
        ],
        'wenninger_number'=>[
            'name' => 'W.',
            'name_full' => 'Номер по книге М.Венниджера'
        ],
        'dual_id'=>[
            'name' => 'Д.',
            'name_full' => 'Двойственный'
        ],

    ];

    $output=$ext_table->DBtoTable($connect,[
        'title'=>'Список многогранников',
        'query'=>$query_table,
        'table'=>$header_table,
        'name_id'=>'polyhedra_id',
        'table_id'=>'polyhedron_list_table',
    ]);

    $response = ['table' => $output['table'],];
    echo json_encode($response);
    mysqli_close($connect);
}