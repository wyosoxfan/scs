<?php
require 'vendor/autoload.php';
use App\SQLiteConnection;

try {
    $pdo = (new SQLiteConnection())->connect();
    if ($pdo != null) {
        //$text = $_REQUEST["text"];
        $pageStmt = $pdo->prepare("SELECT * FROM search INNER JOIN page ON search.id = page.name ORDER BY hits DESC");
        $pageStmt->execute();
        $result = $pageStmt->fetchAll();
        echo json_encode($result);
    } else {
        echo 'Whoops, could not connect to the SQLite database!';
    }
} catch(Exception $e) {
    echo 'Failed to insert data into database.';
}
