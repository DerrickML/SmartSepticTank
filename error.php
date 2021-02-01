<?php
    include './include/title.php';
?>
<!DOCTYPE HTML>
<html>
<header>
    <title>Septic Tank Monitoring<?php if (isset($title)) {echo "&#8212;{$title}";} ?></title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="bootstrap-4.5.1/bootstrap-4.5.1/dist/jsbootstrap.min.css" crossorigin="anonymous">
    <link href="fontawesome-free-5.13.0-web/fontawesome-free-5.13.0-web/css/fontawesome.css" rel="stylesheet">
    <link href="fontawesome-free-5.13.0-web/fontawesome-free-5.13.0-web/css/brands.css" rel="stylesheet">
    <link href="fontawesome-free-5.13.0-web/fontawesome-free-5.13.0-web/css/all.css" rel="stylesheet">
    <link href="fontawesome-free-5.13.0-web/fontawesome-free-5.13.0-web/css/solid.css" rel="stylesheet">
    <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
    <script src="js/jquery.min.js"></script>
    <link rel="stylesheet" href="style1.css" type="text/css" />
</header>

<body>
<div class="grid">
        <?php require './include/header.php'; ?>
        <main class="main">
            <?php require './include/main_header.php'; ?>

            <div class="main-cards">
                <div class="card">
                    <div class="card__header">
                        <div class="card__header-title text-light">
                            <strong>Error encountered</strong>
                        </div>
                        <div class="card__header-title text-light">
                            <!--<button id="renderBtn" align: right><strong>Re-fresh</strong></button>-->
                        </div>
                        <h2>Oops! There&#8217;s a Problem</h2>
                        <p class="overviewCard-subtitle">Sorry, the page you were looking for cannot be displayed.</p>
                    </div>
                    <!-- error message -->
                </div>
            </div>
        </main>
        <?php include './include/footer.php'; ?>
    </div>
</body>
<script src="js/refresh.js"></script>
</html>
