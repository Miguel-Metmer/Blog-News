<?php
require_once("Model/NewsManager.php");

function showNews()
{
    $NewsManager = new NewsManager();

    require_once("View/Home.php");
}

function getSportsNews()
{
    $NewsManager = new NewsManager();
    require_once("View/Home.php");
}