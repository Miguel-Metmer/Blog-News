<?php 
require_once("Controller/Controller.php");

if(isset($_GET["action"]))
{
    if($_GET["action"] == "getSportNews")
    {
        getSportNews();
    }
}
else
{
    showNews();
}