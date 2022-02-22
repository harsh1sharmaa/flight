<?php
// session_start();


// $id=$_GET['id'];
// $from=$_GET['from'];
// $to=$_GET['to'];
// $arrival=$_GET['arrival'];
// $departure=$_GET['departure'];

// $arr=array("id"=>$id,"from"=>$from,"to"=>$to,"arrival"=>$arrival,"departure"=>$departure);


// if(!isset($_SESSION['data'])){
//     $_SESSION['data']=$arr;
// }else{

//     array_push($_SESSION['data'],$arr);
// }
// echo json_encode($_SESSION['data']);

// session_unset();
// session_destroy();
$jsondData=file_get_contents("data.json");
$data = json_decode($jsondData,true);
// foreach($data as $key => $value){
//     foreach($value as $key => $value2){

//         echo $value2['id'];
//         echo $value2['from'];
//         echo $value2['to'];
//         echo $value2['arrival'];
    

    
//     }

    
// }
echo "<pre>";
print_r($data['data']);
echo "</pre>";
// foreach($data['data'] as $key => $value2){
    

//         echo $value2['id'];
//         echo $value2['from'];
//         echo $value2['to'];
//         echo $value2['arrival'];
   
// }

?>