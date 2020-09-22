<?php
require 'vendor/autoload.php';
use App\SQLiteConnection;

$pdo = (new SQLiteConnection())->connect();
if ($pdo != null)
    echo 'Connected to the SQLite database successfully!';
else
    echo 'Whoops, could not connect to the SQLite database!';

try {
    $this->pdo = new \PDO("sqlite:" . Config::PATH_TO_SQLITE_FILE);
} catch (\PDOException $e) {
    // handle exception...
}
?>