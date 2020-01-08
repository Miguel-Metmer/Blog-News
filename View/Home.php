<?php
ob_start();
?>

<section id="News"> 
    <h1> Actualités </h1>
    <div id="Article_Box">
    </div>
</section>


<?php
$content = ob_get_clean();
require_once("View/Template.php");
?>