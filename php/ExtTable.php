<?php
class ExtTable
{

    /**--------------------------------------------------------
     * вывод данных из БД в таблицу
     * @param array $data - параметры
     * @return mixed
     */
    function DBtoTable($connect,$data){
        // $table - массив с данными столбцов таблицы
        // $name_id - идентификатор данных (по нему задаётся значение radio-кнопкам)
        // $access - доступ к столбцам админа
        // $table_id - идентификатор таблицы, для возможности экспорта в xls
        // $id_full -
        // $END - конец таблицы (например итог)
        $title = GetValue($data,'title');
        $query = GetValue($data,'query');
        $table = GetValue($data,'table',[]);
        $name_id = GetValue($data,'name_id');
        $access = GetValue($data,'access_number');
        $table_id = GetValue($data,'table_id','fix_table');
        $id_full = GetValue($data,'id_full');
        $END = GetValue($data,'end');

        //данные о значениях $table
        //align - выравнивание (left, center, right) - по умолчанию center
        //name - название столбца
        //access_number - доступ к столбцу - по умолчанию 1
        //sorting разрешение сортировки
        //search - поиск (нужно указать как происходит поиск)
        //additional дополнительный столбец (открывается при нажатии на кнопку)
        //search_hard - сложная сортировка
        //level - уровень (нужно для поиска)
        //no_limit_length - ячейка без ограничений по длине
        //pre - в ячейке вместо p использовать pre, чтобы \n работали
        //FIO_short - укоротить фио, а в заголовок полное фио
        //внести в сессию информацию о показе полной/неполной информации
        if(isset($id_full)){
            if(isset($_POST['table_full']) && $_POST['table_full']=='true'){
                $_SESSION[$id_full]=true;
            } else if(isset($_POST['table_full']) && $_POST['table_full']=='false') {
                unset($_SESSION[$id_full]);
            }
        }

        $count_rows='0';
        $answer=false;
        if(isset($query)){
            $answer=mysqli_query($connect,$query);
            if($answer){
                $count_rows=mysqli_num_rows($answer);
                
            }
            
        }

        if($answer){
            $OUTPUT['table']= "<table class='table' id='$table_id'>\n";
            $OUTPUT['table'].= "<thead class='table-head'>\n";
            $OUTPUT['table'].= "<tr class='table-head__title'><td>$title</td></tr>";
            //$OUTPUT['table'].=$this->TableSearch($table,$access,$id_full);
            $OUTPUT['table'].=$this->TableHead($table,$access,$id_full);
            $OUTPUT['table'].= "</thead>\n";
            //если нет данных
            if($count_rows==0) {
                $count_table=count($table);
                $OUTPUT['table'].= "<tfoot class='table__table-footer'>\n";
                $OUTPUT['table'].="<tr><td colspan='$count_table'>";
                $OUTPUT['table'].="<img height='64px' src='/img/animation/empty.gif' alt='Пусто' title='Пусто'>";
                $OUTPUT['table'].="</td></tr>";
                $OUTPUT['table'].="</tfoot>";
                $OUTPUT['table'].="</table>";
            }
            //если есть данные
            else if(isset($answer)){
                $OUTPUT['table'].= "<tbody class='table__body'>\n";
                $num_row = 0; //номер строки
                //вывод данных в таблицу
                while ($row = mysqli_fetch_assoc($answer)) {
                    $num_row++;
                    $OUTPUT['table'].= "<tr class='table-body__row'>\n";
                    foreach ($table as $key => $item) {
                        $col_access=GetValue($item,'access',1);//значение доступа к столбцу
                        if($col_access<=$access || !isset($access)){
                            $i_cell = GetValue($row,$key);
                            //ячейка с radio кнопкой (для выбора строки)
                            if ($key=='radio_btn' && isset($name_id)) {
                                $radio_value=$row[$name_id];
                                $radio_id="radio_".$radio_value;
                                $OUTPUT['table'].= "<td class='table-body__radio-block'><input type='radio' name='radio_btn' value='$radio_value' id='$radio_id'></td>\n";
                            }
                            //ячейка с номером строки
                            else if($key=='count_row'){
                                $OUTPUT['table'].= "<th class='table-body__num-row'>$num_row</th>\n";
                            } else {
                                $text=$image=$title=null;

                                $align_class = $this -> AlignText($item);
                                $OUTPUT['table'].= "<td class='table-body__cell $align_class'>";
                                //----------------------------------------
                                //картинка
                                if(isset($item['image']) && isset($item['link_directory'])){
                                    $image = $item['image'];
                                    $link_directory = $item['link_directory'];
                                    $cell_block = "<div class='table-body__img-wrapper'>";
                                    $cell_block .= "<img class='table-body__img' src='{$link_directory}{$i_cell}' alt=''>";
                                    $cell_block .= "</div>";
                                }
                                //Остальные
                                else{
                                    //максимум кол-во символов (остальное обрезается)
                                    $limit_length = GetValue($item,'limit_length',50);
                                    if(iconv_strlen($i_cell, "UTF-8")>=$limit_length && !isset($item['pre'])){
                                        $title=" title='$i_cell'";
                                    }
                                    if(isset($item['pre']) || isset($item['no_limit_length'])){
                                        if(isset($item['title'])){
                                            $title=" title='".$row[$item['title']]."'";
                                        }
                                        $text=$i_cell;
                                    } else {
                                        $text=CutString($i_cell,$limit_length);
                                    }
                                    if(isset($item['title'])){
                                        $title=" title='".$row[$item['title']]."'";
                                    }
                                    $cell_block = "<p class='table-body__text' $title>$text</p>";

                                }
                                $OUTPUT['table'].= $cell_block;
                                $OUTPUT['table'].= "</td>\n";
                            }
                        }//if
                    }//for
                    $OUTPUT['table'].= "</tr>\n";
                }//while

                if(isset($END)){
                    $OUTPUT['table'].= $END;
                }
                $OUTPUT['table'].= "</tbody></table>\n";
            }//if
            $OUTPUT['count']=$count_rows;
        } else {
            $OUTPUT['table'].='Ошибка';
            $OUTPUT['count']='Ошибка';
        }
        return $OUTPUT;
    }

    /**--------------------------------------------------
     * заголовок с поиском
     * @param array $table
     * @param int $access
     * @param string $id_full
     * @return null|string
     */
    /*
     function TableSearch($table,$access,$id_full){
        $OUTPUT=null;
        $search=false;
        //проверка, есть ли хотя бы у одного столбца поиск
        foreach ($table as $key => $item) {
            $col_access=GetValue($item,'access',1);//значение доступа к столбцу
            if(($col_access<=$access || !isset($access)) && isset($item['sorting'])){
                $search=true;
                break;
            }
        }
        if($search){
            $OUTPUT.= "<tr>\n";
            foreach ($table as $key => $item) {
                $col_access=GetValue($item,'access',1);//значение доступа к столбцу
                if($col_access<=$access || !isset($access)){
                    //если у столбца нет поля «дополнительный столбец» или есть это поле и оно активно в сессии
                    if(!isset($item['additional']) || isset($id_full) && isset($_SESSION[$id_full]) && $_SESSION[$id_full]&& isset($item['additional']) && $item['additional']){

                        if($key == 'radio_btn'){
                            $class="table-head__radio-block";
                        } else {
                            $class="table-head__cell cell--search";
                        }


                        $OUTPUT.="<th class='$class'>";

                        if(isset($item['sorting']) && (isset($item['level']) || isset($item['search']) || isset($item['search_hard']))){
                            $col_name=$key;
                            $select_array=$select_col_name=null;

                            //Если есть запрос в БД
                            if(isset($item['query'])){
                                $answer=mssql_query(OutUTF($item['query']));
                                $select_array=[];
                                while($row=mssql_fetch_assoc($answer)){
                                    $id=$row['id'];
                                    if(isset($row['name'])){
                                        $name=$row['name'];
                                    } else {
                                        $name=$id;
                                    }
                                    $title = GetValue($row,'title');
                                    $select_array[$id]=['name'=>$name,'title'=>$title];
                                }
                            }
                            //если данные из массива
                            else if(isset($item['array'])){
                                $select_array=$item['array'];
                            }

                            //если в формирование вывода использовался массив, то для поиска используется select
                            if(isset($select_array)){

                                $select_col_name=null;
                                if(isset($_POST['search_select'])){
                                    $select_col_name=GetValue($_POST['search_select'],$col_name);
                                }

                                //если был поиск
                                if(isset($select_col_name)){
                                    if(MultiArray($select_array)){
                                        $select_text=$select_array[$select_col_name]['name'];
                                    } else {
                                        $select_text=$select_col_name;
                                    }

                                    $option_selected="<option value='' title='По умолчанию'>–</option>";
                                    $option_selected.="<option selected value='$select_col_name'>$select_text</option>";

                                }
                                else {
                                    $option_selected= "<option selected style='display: none;' value=''></option>";
                                }
                                //                            echo OutputArray($select_array);
                                $OUTPUT.= "<select class='cell__search-select' name='search_select[$col_name]' id='$col_name'>";
                                $OUTPUT.= $option_selected;
                                foreach ($select_array as $key_select => $item_select){
                                    if(MultiArray($select_array)){
                                        $text=$item_select['name'];
                                        $value = $key_select;
                                        $title = GetValue($item_select,'title');
                                    } else {
                                        $text = $item_select;
                                        $value = $item_select;
                                        $title = null;
                                    }
                                    if(!isset($select_col_name) || $select_col_name!=$value){
                                        $OUTPUT.= "<option value='$value' title='$title'>$text</option>";
                                    }
                                }
                                $OUTPUT.= "</select>";

                            }else if(preg_match('/date/ui',$key)){
                                $value_date=null;
                                if(isset($_POST['search_date'])){
                                    $value_date=GetValue($_POST['search_date'],$col_name);
                                }
                                $OUTPUT.= "<input class='cell__search-date' type='date' name='search_date[$col_name]' placeholder='поиск' value='$value_date' id='$col_name'>";
                            }else {//для поиска используется input
                                $value_input=null;
                                if(isset($_POST['search_input'])){
                                    $value_input=GetValue($_POST['search_input'],$col_name);
                                }
                                $OUTPUT.= "<input class='cell__search-input' name='search_input[$col_name]' placeholder='поиск' value='$value_input' id='$col_name' autocomplete='off' size='5'>";
                            }
                        }
                        $OUTPUT.="</th>\n";
                    }
                }
            }
            $OUTPUT.= "</tr>\n";
        }
        return $OUTPUT;
    }

    */

    /**--------------------------------------------------
     * вывод заголовка таблицы
     * @param array $table - массив с данными о таблице
     * @param int $access - доступ к столбцам админа
     * @param string $id_full
     * @return null|string
     */
    function TableHead($table,$access,$id_full){
        $OUTPUT=null;
        $OUTPUT.= "<tr>\n";
        //Вывод имён заголовков

        foreach ($table as $key => $item) {
            $col_name=null;
            $col_access=GetValue($item,'access',1);//значение доступа к столбцу
            if($col_access<=$access || !isset($access)){
                //если у столбца нет поля «дополнительный столбец» или есть это поле и оно активно в сессии
                if(!isset($item['additional']) || isset($id_full) && isset($_SESSION[$id_full]) && $_SESSION[$id_full]&& isset($item['additional']) && $item['additional']){
                    $sorting=$hidden=null;
                    if(isset($item['name'])){
                        if($item['name']===true){
                            $col_name = $key;
                        } else {
                            $name=$item['name'];
                            $title = GetValue($item,'name_full',$name);
                            $col_name = "<div title='$title'>$name</div>";
                        }
                    }
                    if(isset($_POST['sorting'])){
                        $sorting=GetValueArray($_POST['sorting'],$key);
                    }

                    if(isset($item['sorting'])){
                        if(!isset($sorting)){
                            $sorting='default';
                        }

                        $hidden="<input type='hidden' name='sorting[$key]' value='$sorting'>";

                    } else {

                        $sorting='disabled';
                    }
                    if($key == 'radio_btn'){
                        $class="table-head__radio-block";
                    } else {
                        $class="table-head__cell cell_sorting";
                    }


                    $OUTPUT.= "<th class='$class $sorting'>";
                    $OUTPUT.=$hidden;
                    $OUTPUT.=$col_name;
                    $OUTPUT.="</th>";
                }
            }
        }
        $OUTPUT.= "</tr>\n";
        return $OUTPUT;
    }

    // выравнивание текста
    function AlignText($item){
        $align = GetValue($item,'align','center'); 

        if($align == 'left'){
            $align_class = "table-body__cell_left";  
        } else {
            $align_class = null;
        }
        return $align_class;
    }


}
