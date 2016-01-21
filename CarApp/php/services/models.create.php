<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request =  (array) $request;


$request['modelName'] = ucwords(strtolower($request['modelName']));


$sql = "INSERT INTO models(name, fk_brand_id) VALUES ( '". $request['modelName'] ."' , '". $request['brandId'] ."' )";


$Done = Database::ejecutar_idu($sql);
$Response = "";

if ($Done == "1") {
	$Response = json_encode( array('err' => false, 'message'=>'Inserted!' ));
}else{
	$Response = json_encode( array('err' => true, 'message'=> $Done ));
}

echo $Response;

?>