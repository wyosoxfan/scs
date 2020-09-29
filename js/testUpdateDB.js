var elementMap = [];

function getLevel(node, list, currentLevel) {
    // Foreach child on this level...
    // Add the element to the list.
    // Go deeper if possible.

    var nodeChildren = node.children;

    for (var i = 0; i < nodeChildren.length; i++) {
        //alert("Level " + currentLevel + ": " + nodeChildren[i].tagName);
        elementMap.push(nodeChildren[i]); // Add the element to the list.
        if (nodeChildren[i].children.length > 0) { // Go deeper if possible.
            currentLevel++; // Add to the level.
            getLevel(nodeChildren[i], list, currentLevel); // Go to the child.
        }
    }
}

var pageElements = document.getElementsByTagName('*');    // Get all elements on the page.
//alert("Element 1 HTML Test: " + pageElements[0].innerHTML);
var page = document.documentElement.children;
var elements = document.body.children;
//alert("page count: " + page.length);
for (var i = 0; i < page.length; i++) {
    //alert("Element " + i + ": " + page[i].tagName);
}

//alert("Element Count: " + elements.length);

// Create an element map.
for (var i = 0; i < elements.length; i++) {
    // Add the start element to a list.
    //alert("Level 0: " + elements[i].tagName);
    elementMap.push(elements[i]);
    getLevel(elements[i], elementMap, 1);
}

// Print all of the elements in the list.
var elementHTML = "";
for (var i = 0; i < elementMap.length; i++) {
    var currentElement = elementMap[i]; // Get the element.
    elementHTML += "<" + currentElement.tagName;
    // foreach attribute...
    if (currentElement.attributes.length > 0) {
        for (var j = 0; j < currentElement.attributes.length; j++) {
            if (j < currentElement.attributes.length - 1) {
                elementHTML += " " + currentElement.attributes[j].name + "=\"" + currentElement.attributes[j].value + "\"";
            } else {
                elementHTML += " " + currentElement.attributes[j].name + "=\"" + currentElement.attributes[j].value + "\">";
            }
        }
    } else {
        elementHTML += ">";
    }

    elementHTML += "\n";
}

alert(elementHTML);