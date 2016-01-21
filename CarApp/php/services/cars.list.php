<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json');

$sql = "SELECT cars.id, brands.name 'brandName', brands.id 'brandId', models.name 'modelName', cars.color, cars.year, cars.price FROM cars JOIN models ON cars.fk_model_id = models.id JOIN brands ON models.fk_brand_id = brands.id";

echo Database::get_json_rows($sql);

?>