<?php
require 'vendor/autoload.php';
use App\SQLiteConnection;

try {
    $pdo = (new SQLiteConnection())->connect();
    if ($pdo != null) {
        $pageTitle = $_REQUEST["qPageTitle"];                                                    // Get the page title.
        $pageURL = $_REQUEST["qPageURL"];                                                        // Get the page URL.
        $elements = $_REQUEST["qElements"];                                                      // Get the elements on the page.

        $pageStmt = $pdo->prepare("INSERT INTO page VALUES (:name, :URL)");                      // Create the insert query for the page data.
        $elementStmt = $pdo->prepare("INSERT INTO element VALUES (:id, :html, :text, :pageID)"); // Create the insert query for the element data.
        $pageStmt->bindParam(':name', $pageTitle);
        $pageStmt->bindParam(':URL', $pageURL);
        $pageStmt->execute();                                                                    // Update the database.

        for ($x = 0; $x <= 10; $x++) {                                                           // Loop through all of the elements and create insert queries...
            $elementID; // Get the id of the element.
            $elementHTML; // Get the html of the element.
            $elementText; // Get the text of the element.
            $elementPageID; // Get the pageID of the element.
            $elementStmt->bindParam(':id', $elementID);                                          // Prepare the sql statement.
            $elementStmt->bindParam(':html', $elementHTML);
            $elementStmt->bindParam(':text', $elementText);
            $elementStmt->bindParam(':pageID', $elementPageID);
            $elementStmt->execute();                                                             // Insert into the database.
        }
        echo 'Updated database successfully!';
    } else {
        echo 'Whoops, could not connect to the SQLite database!';
    }
} catch(Exception $e) {
    echo 'Failed to insert data into database.';
}
