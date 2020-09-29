function updateDB() {
    var xhttp;                                                // Connect to the database.
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //alert(this.responseText);
            //alert("Database has been updated!");             // Send a message saying that the database has been updated.
	    }
    };

    var pageTitle = document.title;                           // Get the name of the page.
    var pageURL = window.location.href;                       // Get the URL of the page.
    var pageElements = document.getElementsByTagName('*');    // Get all elements on the page.
    var elements = [];                                        // List of elements to be sent to the database.

    function Element(id, elementID, html, text, href, src, pageID) {
        this.id = id;
        this.elementID = elementID;
        this.html = html;
        this.text = text;
        this.href = href;
        this.src = src;
        this.pageID = pageID;
    }

    var id;
    var elementID;
    var elementHTML;
    var elementText;
    var elementHREF;
    var elementSRC;

    for (var i = 0; i < pageElements.length; i++) {
        elementHTML = "";
        id = pageTitle + i;
        elementID = pageElements[i].id;                                                   // Get the elementID.
        elementHTML += "<" + pageElements[i].tagName;                                     // Get the HTML.
        if (pageElements[i].attributes.length > 0) {
            for (var j = 0; j < pageElements[i].attributes.length; j++) {
                if (j < pageElements[i].attributes.length - 1) {
                    elementHTML += " " + pageElements[i].attributes[j].name + "=\"" + 
                    pageElements[i].attributes[j].value + "\"";
                } else {
                    elementHTML += " " + pageElements[i].attributes[j].name + "=\"" + 
                    pageElements[i].attributes[j].value + "\">";
                }
            }
        } else {
            elementHTML += ">";
        }
        elementText = $(pageElements[i]).clone().children().remove().end().text();        // Get the text.
        if (pageElements[i].href != undefined) {
            elementHREF = pageElements[i].href;                                    // Get the href.
        } else {
            elementHREF = "";                                                      // Set the href to empty if it doesn't exist.
        }
        if (pageElements[i].src != undefined) {
            elementSRC = pageElements[i].src;                                      // Get the src.
        } else {
            elementSRC = "";                                                       // Set the src to empty if it doesn't exist.
        }
        element = new Element(id, elementID, elementHTML, 
            elementText, elementHREF, elementSRC, pageTitle);                      // Create a new object.
        sElement = JSON.stringify(element);                                        // Stingify the element for php.
	    elements.push(sElement);                                                   // Store into the array.
    }

    $.post("./searchbardb/updateDB.php", 
    { 
	    qPageTitle: pageTitle,
	    qPageURL: pageURL,
	    qElements: elements
    }, function(data,status){
        //alert("Data: " + data + "\nStatus: " + status);
    });
}