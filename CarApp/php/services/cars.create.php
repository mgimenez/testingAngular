<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request =  (array) $request;


$request['color'] = ucwords(strtolower($request['color']));
$request['year'] = ucwords(strtolower($request['year']));
$request['price'] = ucwords(strtolower($request['price']));


$sql = "INSERT INTO cars(color, year, price, fk_model_id) VALUES ( '". $request['color'] ."' , '". $request['year'] ."' , '". $request['price'] ."' , '". $request['modelId'] ."' )";


$Done = Database::ejecutar_idu($sql);
$Response = "";

if ($Done == "1") {
	$Response = json_encode( array('err' => false, 'message'=>'Inserted!' ));
}else{
	$Response = json_encode( array('err' => true, 'message'=> $Done ));
}

echo $Response;

?>