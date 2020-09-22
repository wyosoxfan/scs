<?php
require 'vendor/autoload.php';
use App\SQLiteConnection;

echo 'Entered index file...'; // Entering file message.

$pdo = (new SQLiteConnection())->connect();
if ($pdo != null) {
    $query = $_GET["q"]; // Get the query.
    $stmt = $pdo->prepare('SELECT * FROM page WHERE content'); // Create the query to send to the database and check for injection.
    // Send to the database.
    // Echo the result.
    echo 'Connected to the SQLite database successfully!';
} else {
    echo 'Whoops, could not connect to the SQLite database!';
}
