function updateDB() {
    var xhttp;                                                // Connect to the database.
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
            alert("Database has been updated!");              // Send a message saying that the database has been updated.
	    }
    };

    var pageTitle = document.title;                           // Get the name of the page.
    var pageURL = window.location.href;                       // Get the URL of the page.
    var pageElements = document.getElementsByTagName('*');    // Get all elements on the page.
    var elements = [];                                        // List of elements to be sent to the database.

    function Element(id, html, text, pageID) {
        this.id = id;
        this.html = html;
        this.text = text;
        this.pageID = pageID;
    }

    var elementID;
    var elementHTML;
    var elementText;
    for (var i = 0; i < pageElements.length; i++) {
        elementID = pageElements[i].id;                       // Get the id.
	    elementHTML = pageElements[i].outerHTML;              // Get the html.
	    elementText = pageElements[i].innerText;              // Get the text.
        element = new Element(elementID, elementHTML, 
            elementText, pageTitle);                          // Create a new object.
        sElement = JSON.stringify(element);                   // Stingify the element for php.
	    elements.push(sElement);                              // Store into the array.
    }

    $.post("./searchbardb/updateDB.php", 
    { 
	    qPageTitle: pageTitle,
	    qPageURL: pageURL,
	    qElements: elements
    }, function(data,status){
        alert("Data: " + data + "\nStatus: " + status);
    });
}