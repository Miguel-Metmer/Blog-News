<?php 
require_once("Controller/Controller.php");

if(isset($_GET["action"]))
{
    if($_GET["action"] == "getSportsNews")
    {
        getSportsNews($_GET['category']);
    }
}
else
{
    showNews();
}