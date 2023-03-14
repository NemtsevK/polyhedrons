<?php
require_once('php/Extensions.php');

$connect = ConnectToServer();
$TABLE = null;

$query_select = "SELECT company_id, company_name, phone, email, description FROM Company_list";
$answer = mysqli_query($connect,$query_select);

$num_rows = mysqli_num_rows($answer);
if($num_rows){
    while($row = mysqli_fetch_assoc($answer)){
        $company_id = $row['company_id'];
        $company_name = $row['company_name'];
        $phone = $row['phone'];
        $email = $row['email'];
        $description = $row['description'];
    
        $TABLE.="<tr>";
        $TABLE.="<td>$company_id</td>";
        $TABLE.="<td>$company_name</td>";
        $TABLE.="<td>$phone</td>";
        $TABLE.="<td>$email</td>";
        $TABLE.="<td>$description</td>";
        $TABLE.="</tr>";
    }
} 
else {
    echo Alert("Данные отсутствуют!");
    header("Refresh: 0; url='index.html#become-partner'");
    exit;
}


?>
<table>
<!DOCTYPE html>
<html lang="ru">
<head>
    <title>iSpring</title>
    <link type="image/x-icon" rel="shortcut icon" href="img/favicon.ico">
    <link rel="stylesheet" href="css/table.css">
</head>
<body>
    <main>
        <table class="table">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Company name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <?=$TABLE; ?>
            </tbody>
        </table>
    </main>

</body>
    
</html>

<?php

mysqli_close($connect);