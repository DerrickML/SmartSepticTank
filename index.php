<?php ob_start();
try{
    include './include/connection.php';
    include './include/title.php';
    $header = './include/header.php';
    $main_header = './include/main_header.php';
	$footer = './include/footer.php';
	$tank = 'dashboard.php'
?>

<!-- <!DOCTYPE html> -->
<html>
<?php
        $url=$_SERVER['REQUEST_URI'];
        // header("Refresh: 120; URL=$url"); 
        ?>

<head>
    <title>ST-MS<?php if (isset($title)) {echo "&#8212;{$title}";} ?></title>
    <meta charset="utf-8">
    <script type="text/javascript" src="fusioncharts-dist-develop/fusioncharts.js"></script>
    <script type="text/javascript" src="fusioncharts-dist-develop/themes/fusioncharts.theme.fusion.js"></script>
    <link rel="stylesheet" type="text/css" href="css/dataviz.gauges.css" />
    <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
    <link href="fontawesome-free-5.13.0-web/fontawesome-free-5.13.0-web/css/fontawesome.css" rel="stylesheet">
    <link href="fontawesome-free-5.13.0-web/fontawesome-free-5.13.0-web/css/brands.css" rel="stylesheet">
    <link href="fontawesome-free-5.13.0-web/fontawesome-free-5.13.0-web/css/all.css" rel="stylesheet">
    <link href="fontawesome-free-5.13.0-web/fontawesome-free-5.13.0-web/css/solid.css" rel="stylesheet">
    <script src="js/dataviz.gauges.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="js/Chart.min.js"></script>
    <script type="text/javascript" src='js/data_comm.js'></script>
    <link rel="stylesheet" href="style1.css" type="text/css" />
</head>

<body>
    <div class="grid">
        <main class="main" id="main1">
            <?php require $header; ?>
            <?php require $main_header; ?>

            <div class="main-overview">
                <div class="overviewCard">
                    <div id="container">
                        <script type="text/javascript" src="js/plot.js"></script>
                    </div>
                </div>
            </div>

            <script src="js/refresh.js"></script>

            <div class="main-cards">
                <div class="card">
                    <div class="card__header">
                        <div class="card__header-title text-light">
                            <strong>Gauge</strong>
                        </div>
                    </div>
                    <div id="chart-container">
                        <?php require $tank?>
                    </div>

                </div>
            </div>
            <?php include $footer; ?>
        </main>

    </div>
</body>

</html>
<?php
    } 
    catch (Exception $e) {
        ob_end_clean();
    header('Location: http://localhost/SmartSepticTank/error.php');
    } 
    ob_end_flush();
?>