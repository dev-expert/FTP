<?php

include 'first.php';

$c1=$_POST['name'];
$c2=$_POST['name1'];

$insertquery= "insert into table1(c1,c2) values('$c1','$c2')";
    $result=mysqli_query($conn,$insertquery);

    if($result)
    {
        echo "OKK";
    }
    else{
        echo "NO";
    }

    header("refresh:2; url=form.html")
    ?>