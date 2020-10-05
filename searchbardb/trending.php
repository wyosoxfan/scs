<?php
require 'vendor/autoload.php';
use App\SQLiteConnection;

try {
    $pdo = (new SQLiteConnection())->connect();
    if ($pdo != null) {
        $text = $_REQUEST["text"];
        $pageStmt = $pdo->prepare("SELECT * FROM element INNER JOIN page ON element.pageID = page.name WHERE element.elementID IN");
        $pageStmt->bindParam(":text", $normalText);
        $pageStmt->execute();
        $result = $pageStmt->fetchAll();
        echo json_encode($result);
    } else {
        echo 'Whoops, could not connect to the SQLite database!';
    }
} catch(Exception $e) {
    echo 'Failed to insert data into database.';
}
