<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json');

$brandId = htmlentities($_GET['brandId']);

$sql = "SELECT models.id, models.name 'modelName' FROM models WHERE models.fk_brand_id = " .$brandId;


echo Database::get_json_rows($sql);

?>