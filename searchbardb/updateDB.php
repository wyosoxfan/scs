<?php
require 'vendor/autoload.php';
use App\SQLiteConnection;

try {
    $pdo = (new SQLiteConnection())->connect();
    if ($pdo != null) {
        $pageTitle = $_GET["qPageTitle"];                               // Get the page title.
        $pageURL = $_GET["qPageURL"];                                   // Get the page URL.
        $elements = $_GET["qElements"];                                 // Get the elements on the page.

        $stmt = $pdo->prepare("INSERT INTO page VALUES (:name, :URL)"); // Create the query to send to the database and check for injection.
        $stmt->bindParam(':name', $pageTitle);
        $stmt->bindParam(':URL', $pageURL);
        $stmt->execute();                                               // Update the database.
        echo 'Updated database successfully!';
    } else {
        echo 'Whoops, could not connect to the SQLite database!';
    }
} catch(Exception $e) {
    echo 'Failed to insert data into database.';
}
