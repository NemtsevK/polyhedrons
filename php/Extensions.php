<?php

require_once('ConnectToServer.php');
require_once('ExtTable.php');
require_once('SqlQuery.php');




/**------------------------------------------------------
 * отрезать длинную строку
 * @param $string
 * @param $length
 * @param bool $dots
 * @return string
 */
function CutString($string, $length, $dots = true)
{
    $string_length = iconv_strlen($string, "UTF-8");
    if ($string_length > $length) {
        if ($dots) {
            $end = "...";
        } else {
            $end = "";
        }
        $string = iconv_substr($string, 0, $length, "UTF-8") . $end;
    }
    return $string;
}

/**------------------------------------------------------
 * получить переменную из массива
 * @param $array
 * @param $value
 */
function GetValue($array, $value, $no_isset = null)
{
    //если есть значение и оно не пустое
    if (isset($array[$value]) && (!empty($array[$value]) || $array[$value] === 0 || $array[$value] === '0')) {
        $output = $array[$value];
    }
    //если нет значения
    else if (isset($no_isset)) {
        $output = $no_isset;
    } else {
        $output = null;
    }

    return $output;
}

/**------------------------------------------------------
 * Вывод массива
 * @param $array - массив
 * @param null $name - вывод его имения
 * @param bool $pre - использовать ли тег pre
 * @param string $color - цвет текста
 * @return null|string
 */
function OutputArray($array, $name = null, $pre = true, $color = null)
{
    $OUTPUT = $style = null;
    if (isset($color)) {
        $style = "style='color: $color'";
    }
    if ($pre) {
        $OUTPUT .= "<pre $style>\n";
    }
    if (isset($name)) {
        $OUTPUT .= $name . ":\n";
    }
    $OUTPUT .= print_r($array, true);
    if ($pre) {
        $OUTPUT .= "</pre>\n";
    }
    return $OUTPUT;
}
