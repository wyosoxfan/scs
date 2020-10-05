<?php
require 'vendor/autoload.php';
use App\SQLiteConnection;

try {
    $pdo = (new SQLiteConnection())->connect();
    if ($pdo != null) {
        $pageTitle = $_REQUEST["qPageTitle"];                                                                             // Get the page title.
        $pageURL = $_REQUEST["qPageURL"];                                                                                 // Get the page URL.
        $elements = $_REQUEST["qElements"];                                                                               // Get the elements on the page.
        $elementArrayItem1 = json_decode($elements[0]);                                                                   // Decode the object sent from the javascript file.

        $pageStmt = $pdo->prepare("INSERT INTO page VALUES (:name, :URL)");                                               // Create the insert query for the page data.
        $elementStmt = $pdo->prepare("INSERT INTO element VALUES (:id, :elementID, :html, :text, :href, :src, :pageID)"); // Create the insert query for the element data.
        $searchStmt = $pdo->prepare("INSERT INTO search VALUES (:id, :hits, :text)");                                     // Prepare the search statement.
        $pageStmt->bindParam(':name', $pageTitle);                                                                        // Bind the name parameter to the page statement.
        $pageStmt->bindParam(':URL', $pageURL);                                                                           // Bind the URL parameter to the page statement.
        $pageStmt->execute();                                                                                             // Update the database.

        for ($i = 0; $i <= count($elements); $i++) {                                                                      // Loop through all of the elements and create insert queries...
            echo "Element " . $i . "\n";
            $elementObject = json_decode($elements[$i]);                                                                  // Get the element.
            $id = $elementObject->id;                                                                                     // Get the id of the element in the table.
            $elementID = $elementObject->elementID;                                                                       // Get the id of the element.
            $elementHTML = $elementObject->html;                                                                          // Get the html of the element.
            $elementText = $elementObject->text;                                                                          // Get the text of the element.
            $elementHREF = $elementObject->href;                                                                          // Get the href of the page connected to the element.
            $elementSRC = $elementObject->src;                                                                            // Get the src of the element.
            $elementPageID = $elementObject->pageID;                                                                      // Get the pageID of the element.
            $elementStmt->bindParam(':id', $id);                                                                          // Bind the id parameter to the element statement.
            $elementStmt->bindParam(':elementID', $elementID);                                                            // Bind the data to the query.
            $elementStmt->bindParam(':html', $elementHTML);                                                               // Bind the html parameter to the element statement.
            $elementStmt->bindParam(':text', $elementText);                                                               // Bind the text parameter to the element statement.
            $elementStmt->bindParam(':href', $elementHREF);                                                               // Bind the href parameter to the element statement.
            $elementStmt->bindParam(':src', $elementSRC);                                                                 // Bind the src parameter to the element statement.
            $elementStmt->bindParam(':pageID', $elementPageID);                                                           // Bind the pageID parameter to the element statement.
            $elementStmt->execute();                                                                                      // Insert into the database.
        }

                                                                                                                          // Set the id parameter (page name).
        $hitCount = 0;                                                                                                    // Set the hit count (0).
        $searchText = $pageTitle;                                                                                         // Set the text parameter.
        $searchStmt->bindParam('id', $pageTitle);                                                                         // Bind id parameter to the search statement.
        $searchStmt->bindParam('hits', $hitCount);                                                                        // Bind the hits parameter to the search statement.
        $searchStmt->bindParam('text', $pageTitle);                                                                       // Bind the text parameter to the search statement.
        $searchStmt->execute();                                                                                           // Execute the search insert.
        echo 'Updated database successfully!';
    } else {
        echo 'Whoops, could not connect to the SQLite database!';
    }
} catch(Exception $e) {
    echo 'Failed to insert data into database.';
}
