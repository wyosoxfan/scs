<?php
namespace App;

class SQLiteConnection {
    private $pdo;

    public function connect() {
        if ($this->pdo == null) {
            $this->pdo = new \PDO("sqlite:" . Config::PATH_TO_SQLITE_FILE);
        }

        return $this->pdo;
    }
}
?>