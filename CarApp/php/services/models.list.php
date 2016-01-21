<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json');

$sql = "SELECT models.id, models.name 'modelName', brands.name 'brandName' FROM models JOIN brands ON models.fk_brand_id = brands.id";


echo Database::get_json_rows($sql);

?>