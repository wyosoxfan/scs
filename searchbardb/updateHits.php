<?php
require 'vendor/autoload.php';
use App\SQLiteConnection;

try {
    $pdo = (new SQLiteConnection())->connect();
    if ($pdo != null) {
        $text = $_REQUEST["text"];
        $pageStmt = $pdo->prepare("UPDATE search SET hits = (hits + 1) WHERE text = :text;");
        $pageStmt->bindParam(':text', $text);
        $pageStmt->execute();
        echo 'Count updated!';
    } else {
        echo 'Whoops, could not connect to the SQLite database!';
    }
} catch(Exception $e) {
    echo 'Failed to insert data into database.';
}
