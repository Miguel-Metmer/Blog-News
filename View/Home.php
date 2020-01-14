<?php
ob_start();
?>


<section id="Slider">
    <figure>
        <img src="/Public/Image/background.jpg" alt="Background"/>
        <figcaption>    
            <h1> Actualités </h1> 
        </figcaption>
    </figure>
</section>
<section id="News"> 
    <div id="Article_Box">
    </div>
</section>


<?php
$content = ob_get_clean();
require_once("View/Template.php");
?>