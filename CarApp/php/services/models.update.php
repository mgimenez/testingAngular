<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request =  (array) $request;


$request['modelName'] = ucwords(strtolower($request['modelName']));


$sql = "UPDATE models SET name = '".$request['modelName']."', fk_brand_id = '".$request['brandId']."' WHERE id = ".$request['id'];

$Done = Database::ejecutar_idu($sql);
$Response = "";

if ($Done == "1") {
	$Response = json_encode( array('err' => false, 'message'=>'Updated!.' ));
}else{
	$Response = json_encode( array('err' => true, 'message'=> $Done ));
}
echo $Response;

?>