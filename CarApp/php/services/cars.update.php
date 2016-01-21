<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request =  (array) $request;


$request['modelName'] = ucwords(strtolower($request['modelName']));
$request['color'] = ucwords(strtolower($request['color']));
$request['year'] = ucwords(strtolower($request['year']));
$request['price'] = ucwords(strtolower($request['price']));


$sql = "UPDATE cars SET color = '".$request['color']."', year = '".$request['year']."', price = '".$request['price']."', fk_model_id = '".$request['modelId']."' WHERE id = ".$request['id'];

$Done = Database::ejecutar_idu($sql);
$Response = "";

if ($Done == "1") {
	$Response = json_encode( array('err' => false, 'message'=>'Updated!.' ));
}else{
	$Response = json_encode( array('err' => true, 'message'=> $Done ));
}
echo $Response;

?>