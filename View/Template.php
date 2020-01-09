<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8"/>
        <title> News </title>
        <link rel="stylesheet" href="../Public/Css/Style.css"/>
    </head>
    <body>
        <header>
            <h1> <a href="Index.php"> Actualités & Informations </a> </h1>
        </header>
        <nav>
            <ul>
                <li> <a href="Index.php"> Forum </a></li>
                <li>
                    <a href="Actualités.php"> Actualités </a>
                    <ul> 
                        <li><i class="fas fa-long-arrow-alt-right"></i> </li>
                        <li> <a href="index.php"> Sport </a> </li> 
                        <li> <a href="index.php"> Divertissement </a> </li>
                        <li> <a href="index.php"> Santé </a>   </li>
                        <li> <a href="index.php"> Sciences </a>  </li>
                        <li> <a href="index.php"> Technology </a>   </li>
                    </ul>
                </li>   
            </ul>
        </nav>
        <?php echo $content ?>
    </body>

    <script src="/Public/Js/NewsManager.js"></script>
    <script src="https://kit.fontawesome.com/a89d872ece.js" crossorigin="anonymous"></script> <!-- font awesome script-->
</html>