<?php
require 'vendor/autoload.php';
use App\SQLiteConnection;

try {
    $pdo = (new SQLiteConnection())->connect();
    if ($pdo != null) {
        $text = $_REQUEST["qText"];

        $pageStmt = $pdo->prepare("SELECT * FROM element WHERE element.text LIKE \"%:text%\";");
        $pageStmt->bindParam(":text", $text);
        $pageStmt->execute();
        $result = $pageStmt->fetchAll();
        return $result;
        echo 'Updated database successfully!';
    } else {
        echo 'Whoops, could not connect to the SQLite database!';
    }
} catch(Exception $e) {
    echo 'Failed to insert data into database.';
}
