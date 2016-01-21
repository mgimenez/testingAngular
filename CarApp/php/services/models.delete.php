<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

$postdata = file_get_contents("php://input");

$sql = "DELETE FROM models WHERE id = ".$_GET['id'];
$Done = Database::ejecutar_idu($sql);
$Response = "";

if ($Done == "1") {
	$Response = json_encode( array('err' => false, 'message'=>'Deleted!.' ));
}else{
	$Response = json_encode( array('err' => true, 'message'=> $Done ));
}

echo $Response;

?>