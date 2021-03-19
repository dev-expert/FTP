<?php

include 'first.php';



$insertquery= "insert into table1(c1,c2) values('$c1','$c2')";
    $result=mysqli_query($conn,$insertquery);

    if($result)
    {
        echo "OKK";
    }
    else{
        echo "NO";
    }

    // $delquery= "delete  from table1 where c1='Manoj'";
    // $res=mysqli_query($conn,$delquery);
    // if($res)
    // {
    //     echo "Deleted successfully";
    // }
    // else{
    //     echo "Not success";
    // }

    // $sql = "UPDATE table1 SET c1='Doe' WHERE c1='Manoj'";
    // $res=mysqli_query($conn,$sql);
    // if($res)
    // {
    //     echo "updated successfully";
    // }
    // else{
    //     echo "Not updated";
    // }
 ?>


