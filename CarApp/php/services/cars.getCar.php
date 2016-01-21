<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json;');

// Verificar que venga el parametro
if (!isset($_GET['id'])) {
	echo json_encode( array('err' => true,'message'=>"Missing id") );
	die;
}

// Desinfectar el parametro
$id = htmlentities($_GET['id']);


// Verificar si existe
$sql = "SELECT count(*) as Exist FROM cars WHERE id = ".$id;
$exist = Database::get_valor_query($sql,"Exist");


if ($exist == 1) {
	// Si existe, imprime el json
	$sql = "SELECT cars.id, cars.color, cars.year, cars.price, models.name 'modelName', models.id 'modelId', brands.name 'brandName', models.fk_brand_id 'brandId' FROM cars JOIN models ON cars.fk_model_id = models.id JOIN brands ON models.fk_brand_id = brands.id WHERE cars.id = ".$id;
	echo json_encode( Database::get_Row($sql) );	

}else{

	echo json_encode( array('err'=>true, 'message'=>'Id not exist') );

}


?>