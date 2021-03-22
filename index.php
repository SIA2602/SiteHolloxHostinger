<?php
require_once "detect_Mobile/Mobile_Detect.php";
$detect = new Mobile_Detect;
?>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Danilo Silva">    
    <title>Hollox</title>
    <link rel="icon" type="image/x-icon" href="assets/img/icone.png" /> 
    <link rel="canonical" href="https://hollox.com.br">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">

    <!-- 🚨 REQUIRED: Web Components polyfill to support Edge and Firefox < 63 -->
    <script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.1.3/webcomponents-loader.js"></script>

    <!-- 💁 OPTIONAL: Intersection Observer polyfill for better performance in Safari and IE11 -->
    <script src="https://unpkg.com/intersection-observer@0.5.1/intersection-observer.js"></script>

    <!-- 💁 OPTIONAL: Resize Observer polyfill improves resize behavior in non-Chrome browsers -->
    <script src="https://unpkg.com/resize-observer-polyfill@1.5.0/dist/ResizeObserver.js"></script>

    <!-- 💁 OPTIONAL: Fullscreen polyfill is needed to fully support AR features -->
    <script src="https://unpkg.com/fullscreen-polyfill@1.0.2/dist/fullscreen.polyfill.js"></script>

    <!-- 💁 OPTIONAL: Include prismatic.js for Magic Leap support -->
    <script src="https://unpkg.com/@magicleap/prismatic/prismatic.min.js"></script>
    
    <!-- 💁 OPTIONAL: The :focus-visible polyfill removes the focus ring for some input types -->
    <script src="https://unpkg.com/focus-visible@5.0.2/dist/focus-visible.js" defer></script>    
    
    <!-- Font Awesome icons (free version)-->
    <script src="https://use.fontawesome.com/releases/v5.15.1/js/all.js" crossorigin="anonymous"></script> 

    <!-- Google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" type="text/css" />

    <!-- Bootstrap core CSS -->
    <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet"> 

    <!-- Custom styles for this template -->
    <link href="css/carousel.css" rel="stylesheet">
     
</head>

<body>
    <?php if ($detect->isMobile()){ ?>
    	<?php
            require 'siteMobile.html';
        ?>
    <?php }else{ ?>
    	<?php
            require('siteDesktop.html');
        ?>
    <?php } ?>
    
</body>