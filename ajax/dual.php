<?php
require_once('../php/Extensions.php');
$sql_query = new SqlQuery();
$ext_table = new ExtTable();
if(isset($_GET['polyhedrons'])){
    $connect = ConnectToServer();
    $value['where'] = "WHERE a.dual_id IS NOT NULL AND a.type_id IN (1,2,4,6,7,9,10)";
    $query_table = $sql_query -> DualPolyhedronsList($value);

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
        
        'dual_image'=>[
            'name' => '',
            'image' => true,
            'link_directory' => 'img/polyhedrons/'
        ],

        'dual_name_rus'=>[
            'name' => 'Двойственный',
            'name_full' => 'Название двойственного',
            'align' => 'left'
        ],



    ];

    $output=$ext_table->DBtoTable($connect,[
        'title'=>'Двойственные многогранники',
        'query'=>$query_table,
        'table'=>$header_table,
        'name_id'=>'polyhedra_id',
        'table_id'=>'polyhedron_list_table',
    ]);

    $response = ['table' => $output['table'],];
    echo json_encode($response);
    mysqli_close($connect);

}

