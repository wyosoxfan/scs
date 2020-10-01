<?php
require 'vendor/autoload.php';
use App\SQLiteConnection;

try {
    $pdo = (new SQLiteConnection())->connect();
    if ($pdo != null) {
        $text = $_REQUEST["text"];
        $text = "%".$text."%";
        //echo $text;

        //$pageStmt = $pdo->prepare("SELECT * FROM element WHERE element.text LIKE :text AND element.elementID IS NOT NULL");
        //$pageStmt = $pdo->prepare("SELECT * FROM element WHERE element.text LIKE :text AND element.elementID != '';");
        //$pageStmt = $pdo->prepare("SELECT * FROM element INNER JOIN page ON element.pageID = page.name WHERE element.elementID IN 
        //(SELECT elementID FROM element WHERE element.text LIKE :text AND element.elementID != '');");
        $pageStmt = $pdo->prepare("SELECT * FROM element INNER JOIN page ON element.pageID = page.name WHERE element.elementID IN
        (SELECT elementID FROM element WHERE (element.elementID LIKE '%-link') AND (element.text LIKE :text) AND (element.text != '' AND element.text != ' ') AND element.html LIKE '<a%') OR element.elementID IN
        (SELECT elementID FROM element WHERE (element.elementID LIKE '%-header') AND (element.text LIKE :text) AND (element.text != '' AND element.text != ' ') AND (element.html LIKE '<h%' OR element.html LIKE '<p%')) OR element.elementID IN
        (SELECT elementID FROM element WHERE (element.elementID LIKE '%-text') AND (element.text LIKE :text) AND (element.text != '' AND element.text != ' ') AND (element.html LIKE '<h%' OR element.html LIKE '<p%')) OR element.id IN
        (SELECT id FROM element WHERE (element.text LIKE :text) AND (element.text != '' AND element.text != ' ') AND (element.html LIKE '<h%' OR element.html LIKE '<p%'))
        ORDER BY html ASC, elementID DESC, text ASC;");
        $pageStmt->bindParam(":text", $text);
        //echo var_dump($pageStmt);
        $pageStmt->execute();
        $result = $pageStmt->fetchAll();
        //echo var_dump($result);
        echo json_encode($result);
    } else {
        echo 'Whoops, could not connect to the SQLite database!';
    }
} catch(Exception $e) {
    echo 'Failed to insert data into database.';
}
