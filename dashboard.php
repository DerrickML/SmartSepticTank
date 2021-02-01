<!--
Project: Smart Water Tank
Created by: Jitesh Saini
-->

<html>
<head>
    <title>Water Tank</title>
	
    <script type="text/javascript" src="fusioncharts-dist-develop/fusioncharts.js"></script>
    <script type="text/javascript" src="fusioncharts-dist-develop/themes/fusioncharts.theme.fusion.js"></script>
  
	<script type="text/javascript" src="js/tank_animation.js"></script>
    <script type="text/javascript" src='js/jquery3.min.js'></script>
    <script type="text/javascript" src='js/data_comm.js'></script>

    <link rel="stylesheet" type="text/css" href="css/dashboard.css">
</head>
<body onload="data_request_timer(2000)">
<?php
error_reporting(-1);

echo"<div id='box_outer'>";
    
    echo"<div id='box_top' align='center'>";
    echo"</div>";

    // echo"<div id='box_rt'>";
	//     echo"<div id='chart-container'>Reload Page if you don't see animation</div>";
    // echo"</div>";


echo"</div>";


?>
</body>
</html>