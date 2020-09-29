<?php
require 'vendor/autoload.php';
use App\SQLiteConnection;

try {
    $pdo = (new SQLiteConnection())->connect();
    if ($pdo != null) {
        $pageTitle = $_REQUEST["qPageTitle"];                                                                // Get the page title.
        $pageURL = $_REQUEST["qPageURL"];                                                                    // Get the page URL.
        $elements = $_REQUEST["qElements"];                                                                  // Get the elements on the page.
        $elementArrayItem1 = json_decode($elements[0]);
        //echo var_dump($elementArrayItem1);
        //echo "Individual element property:";
        //echo var_dump($elementArrayItem1->id);

        $pageStmt = $pdo->prepare("INSERT INTO page VALUES (:name, :URL)");                                   // Create the insert query for the page data.
        $elementStmt = $pdo->prepare("INSERT INTO element VALUES (:id, :elementID, :html, :text, :href, :src, :pageID)"); // Create the insert query for the element data.
        $pageStmt->bindParam(':name', $pageTitle);
        $pageStmt->bindParam(':URL', $pageURL);
        $pageStmt->execute();                                                                                 // Update the database.

        for ($i = 0; $i <= count($elements); $i++) {                                                          // Loop through all of the elements and create insert queries...
            echo "Element " . $i . "\n";
            $elementObject = json_decode($elements[$i]);                                                      // Get the element.
            $id = $elementObject->id;
            $elementID = $elementObject->elementID;                                                                  // Get the id of the element.
            $elementHTML = $elementObject->html;                                                              // Get the html of the element.
            $elementText = $elementObject->text;                                                              // Get the text of the element.
            $elementHREF = $elementObject->href;
            $elementSRC = $elementObject->src;
            $elementPageID = $elementObject->pageID;                                                          // Get the pageID of the element.
            $elementStmt->bindParam(':id', $id);
            $elementStmt->bindParam(':elementID', $elementID);                                                       // Bind the data to the query.
            $elementStmt->bindParam(':html', $elementHTML);
            $elementStmt->bindParam(':text', $elementText);
            $elementStmt->bindParam(':href', $elementHREF);
            $elementStmt->bindParam(':src', $elementSRC);
            $elementStmt->bindParam(':pageID', $elementPageID);
            $elementStmt->execute(); // Insert into the database.
        }
        echo 'Updated database successfully!';
    } else {
        echo 'Whoops, could not connect to the SQLite database!';
    }
} catch(Exception $e) {
    echo 'Failed to insert data into database.';
}
