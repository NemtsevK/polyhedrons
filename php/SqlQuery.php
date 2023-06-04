<?php

class SqlQuery
{

    /**-------------------------------------------------------
     * параметры для запроса заявок
     * @param $value
     * @return mixed
     */
    function QueryOption($value)
    {
        if (!isset($value['top'])) {
            $value['top'] = null;
        }
        if (!isset($value['where'])) {
            $value['where'] = null;
        }
        if (!isset($value['order'])) {
            $value['order'] = null;
        }
        return $value;
    }


    function PolyhedronsList($value = [])
    {
        $value = $this->QueryOption($value);
        return "SELECT {$value['top']} polyhedra_id
            ,a.name_rus AS name_rus
            ,a.name_eng AS name_eng
            ,b.type_id AS type_id
            ,b.name_rus AS type_name_rus
            ,b.name_eng AS type_name_eng
            ,faces
            ,edges
            ,vertices
            ,wenninger_number
            ,dual_id
            ,a.image AS image
            ,c.symmetry_id AS symmetry_id
            ,c.name_rus AS symmetry_name_rus
            FROM polyhedrons_list a
            LEFT JOIN polyhedrons_type b
            ON a.type_id = b.type_id
            LEFT JOIN symmetry c
            ON a.symmetry_id = c.symmetry_id
            {$value['where']}
            {$value['order']}";
    }

    function DualPolyhedronsList($value = [])
    {
        $value = $this->QueryOption($value);
        return "SELECT {$value['top']} a.polyhedra_id AS polyhedra_id
            ,a.name_rus AS name_rus
            ,a.name_eng AS name_eng
            ,b.type_id AS type_id
            ,b.name_rus AS type_name_rus
            ,b.name_eng AS type_name_eng
            ,a.faces AS faces
            ,a.edges AS edges
            ,a.vertices AS vertices
            ,a.wenninger_number AS wenninger_number
            ,a.dual_id AS dual_id
            ,a.image AS image
            ,c.symmetry_id AS symmetry_id
            ,c.name_rus AS symmetry_name_rus
            ,d.name_rus AS dual_name_rus
            ,d.name_eng AS dual_name_eng
            ,d.image AS dual_image
            FROM polyhedrons_list a
            LEFT JOIN polyhedrons_type b
            ON a.type_id = b.type_id
            LEFT JOIN symmetry c
            ON a.symmetry_id = c.symmetry_id
            LEFT JOIN polyhedrons_list d
            ON a.dual_id = d.polyhedra_id
            {$value['where']}
            {$value['order']}";
    }
}
