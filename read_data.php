<?php
/*
* Project: Smart Water Tank
* Created by: Jitesh Saini
*/

error_reporting(-1);

//----------database access----------------------------
include_once 'db_query.php';
include_once 'db_params_wt.php';
//-----------------------------------------------------

include_once 'util_functions_wt.php';

$sql="SELECT * FROM `septic1` WHERE 1 order by `ID` desc limit 1";
$row=db_select_row($sql);
$x_cm=$row['Septic_Level'];


global $dia, $height;
$septic_level=$height-$x_cm;
$septic_level= round($septic_level,1);

$volume=calculate_volume($dia,$septic_level);

$widget=@$_GET["widget"];

if($widget=="tank_animation"){
	$str="&value=".$volume;
	echo"$str";
}


?>