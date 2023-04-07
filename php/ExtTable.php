<?php
class ExtTable
{

    /**--------------------------------------------------------
     * вывод данных из БД в таблицу
     * @param array $data - параметры
     * @return mixed
     */
    function DBtoTable($data){
        // $table - массив с данными столбцов таблицы
        // $name_id - идентификатор данных (по нему задаётся значение radio-кнопкам)
        // $access - доступ к столбцам админа
        // $table_id - идентификатор таблицы, для возможности экспорта в xls
        // $id_full -
        // $END - конец таблицы (например итог)
        $title = GetValueArray($data,'title');
        $query = GetValueArray($data,'query');
        $table = GetValue($data,'table',[]);
        $name_id = GetValueArray($data,'name_id');
        $access = GetValueArray($data,'access_number');
        $table_id = GetValue($data,'table_id','fix_table');
        $id_full = GetValueArray($data,'id_full');
        $END = GetValueArray($data,'end');

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
            $answer=mssql_query(OutUTF($query));
            if($answer){
                $count_rows=mssql_num_rows($answer);
            }
        }
        if($answer){
            $OUTPUT['table']= "<table class='output__table fix_table' id='$table_id'>\n";
            $OUTPUT['table'].= "<thead class='table__table-head'>\n";
            $OUTPUT['table'].= "<tr class='table-head__title'><td>$title</td></tr>";
            $OUTPUT['table'].=$this->TableSearch($table,$access,$id_full);
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
                while ($row = mssql_fetch_assoc($answer)) {
                    $num_row++;
                    $OUTPUT['table'].= "<tr class='body__row'>\n";
                    foreach ($table as $key => $item) {
                        $col_access=GetValue($item,'access',1);//значение доступа к столбцу
                        if($col_access<=$access || !isset($access)){
                            $i_cell = GetValueArray($row,$key);
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
                                //если у столбца нет поля «дополнительный столбец» или есть это поле и оно активно в сессии
                                if(!isset($item['additional']) || isset($id_full) && isset($_SESSION[$id_full]) && $_SESSION[$id_full]&& isset($item['additional']) && $item['additional']){
                                    $text=$image=$title=null;
                                    //----------------------------------------
                                    $width="height='24px'";

                                    //аватар
                                    if($key=='avatar' && isset($i_cell)){
                                        $image="<img $width src='/img/avatar/small/$i_cell' alt='$i_cell'>";
                                    }
                                    //ячейка с картинкой (поиск индекса массива) массив не должен быть одномерным
                                    else if(array_key_exists('array',$item) && MultiArray($item['array'])){
                                        //получение ссылки на массив
                                        $array=$item['array'];
                                        if(isset($array[$i_cell]["image"]) && isset($array[$i_cell]["name"])){
                                            $link=$array[$i_cell]["image"];
                                            //если есть title, то он используется, иначе - name
                                            $title=GetValue($array[$i_cell],'title',$array[$i_cell]['name']);
                                            $image="<img $width src='$link' title='$title' alt='$title'>";
                                        } else {
                                            if(isset($array[$i_cell]['name'])){
                                                if(isset($array[$i_cell]['title'])){
                                                    $title=" title='{$array[$i_cell]['title']}'";
                                                }
                                                $text=$array[$i_cell]['name'];
                                            }
                                        }
                                    }
                                                                                                          
                                    //Остальные
                                    else{
                                        $ext_users = new ExtUsers();
                                        $conv_cell=InUTF($i_cell);
                                        //максимум кол-во символов (остальное обрезается)
                                        $limit_length = GetValue($item,'limit_length',50);
                                        if(iconv_strlen($conv_cell, "UTF-8")>=$limit_length && !isset($item['pre'])){
                                            $title=" title='$conv_cell'";
                                        }
                                        if(isset($item['pre']) || isset($item['no_limit_length'])){
                                            if(isset($item['title'])){
                                                $title=" title='".InUTF($row[$item['title']])."'";
                                            }
                                            $text=$conv_cell;
                                        } else {
                                            //укоротить фио, а в заголовок полное фио
                                            if(isset($item['FIO_short']) && $item['FIO_short']){
                                                $text = $ext_users -> FioShort($conv_cell);
                                                $title=" title='$conv_cell'";
                                            } else {
                                                $text=CutString($conv_cell,$limit_length);
                                            }
                                        }
                                    }
                                    $align = GetValue($item,'align','center'); // выравнивание текста
                                    $OUTPUT['table'].= "<td class='table-body__cell' style='text-align:$align'>";
                                    if(isset($image)){$OUTPUT['table'].= $image;}
                                    if(isset($text)) {
                                        if(isset($item['title'])){
                                            $title=" title='".InUTF($row[$item['title']])."'";
                                        }
                                        if(isset($item['pre'])){
                                            $OUTPUT['table'].= "<pre$title>$text</pre>";
                                        } else{
                                            $OUTPUT['table'].= "<p$title>$text</p>";
                                        }
                                    }
                                    $OUTPUT['table'].= "</td>\n";
                                }
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
            $OUTPUT['table']='Ошибка';
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
                                    $id=InUTF($row['id']);
                                    if(isset($row['name'])){
                                        $name=InUTF($row['name']);
                                    } else {
                                        $name=$id;
                                    }
                                    $title = GetValueArray($row,'title',true);
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
                                    $select_col_name=GetValueArray($_POST['search_select'],$col_name);
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
                                        $title = GetValueArray($item_select,'title');
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
                                    $value_date=GetValueArray($_POST['search_date'],$col_name);
                                }
                                $OUTPUT.= "<input class='cell__search-date' type='date' name='search_date[$col_name]' placeholder='поиск' value='$value_date' id='$col_name'>";
                            }else {//для поиска используется input
                                $value_input=null;
                                if(isset($_POST['search_input'])){
                                    $value_input=GetValueArray($_POST['search_input'],$col_name);
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

    


}
