function updateCount() {
    // Send the header to be inserted into the search table and update the count.
}

function updatePage(list) {
    var dropdown = document.getElementById("dropdownList");
	var dropdownContainer = document.getElementById("dropdown-container");
	dropdown.style.visibility = "visible";
	dropdown.style.display = "";
    dropdownContainer.style.display = "";
    var myUL = document.getElementById("myUL");
    var searchResults = myUL.getElementsByTagName("li");
    for (var i = 0; i < list.length; i++) {                                                              // Generate the results and add to the page...
        var header = list[i][0];                                                                         // The header of the selected data.
        var content = list[i][1];                                                                        // The content of the selected data.
        var liTemp = "<li class=\"list-group-item\" clickon=\"updateCount\"><h3>" + header + "</h3><p>" + content + "</p></li>"; // Create the html template to put into the search results.
        myUL.innerHTML += liTemp;
        //liTemp.onclick(updateCount);
        //myUL.appendChild(liTemp);                                                                        // Add the template to the list.
    }
}

function loadSearchResults(str) {
    // Send the text to the database in a pattern form.
    // Post...
    $.post("./searchbardb/search.php",
    {
        text: str
    }, function(data,status) {
        //alert(data);
        data = JSON.parse(data);
        var list = [];

        for (var i = 0; i < 25; i++) {
            var header = data[i][6]; // Get the header.
            var content = data[i][3]; // Get the content.
            list.push([header, content]);
        }

        updatePage(list);
    });
}

function searching() {
    var input = document.getElementById("text_box");

    // OTHER SEARCH FUNCTIONALITY HERE...
    // For each possible search result in searchResults...
    if (input.value != "") {
        // Get the data from the database...
        loadSearchResults(input.value);
    }
}

function hide() {
    if (document.getElementById("text_box").value == "") {
        document.getElementById("dropdownList").style.visibility = "hidden"; // Hide the search box results.
        document.getElementById("dropdown-container").style.display = "none";
        document.getElementById("text_box").blur();
    }
}

function clickMapView() {
    var mapView = document.getElementById("mapView");
    if (mapView.style.visibility != "visible") {
        mapView.style.visibility = "visible";
        mapView.style.display = "";
    } else {
        mapView.style.visibility = "hidden";
        mapView.style.display = "none";
    }
}

function enableMapView() {
    var mapView = document.getElementById("mapView");
    if (mapView.style.visibility != "visible") {
        mapView.style.visibility = "visible";
        mapView.style.display = "";
    }
}

function disableMapView() {
    var mapView = document.getElementById("mapView");
    if (mapView.style.visibility == "visible") {
        mapView.style.visibility = "hidden";
        mapView.style.display = "none";
    }
}

var searchBar = document.getElementById("text_box");
var dropdownList = document.getElementById("dropdownList");
var mapButton = document.getElementById("map-square");
var mapView = document.getElementById("mapView");
var searchbarContainer = document.getElementById("searchbar-container");

if (searchbarContainer != null) {
    //searchbarContainer.style.visibility = "hidden";
    //searchbarContainer.style.display = "none";
}
if (searchBar != null) {
    searchBar.addEventListener("input", searching);
    searchBar.addEventListener("focusin", searching);
    searchBar.addEventListener("focusout", hide);
}
if (dropdownList != null) {
    dropdownList.addEventListener("mouseleave", hide);
    dropdownList.addEventListener("focusin", searching);
}
if (mapButton != null) {
    mapButton.addEventListener("click", clickMapView);
    mapButton.addEventListener("mouseover", enableMapView);
    mapButton.addEventListener("mouseleave", disableMapView);
    mapView.addEventListener('mouseenter', enableMapView);
    mapView.addEventListener('mouseleave', disableMapView);
}

// Load the page to the database.
//updateDB();

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

// NOTE: We need to make it so the search bar results disappear when the user clicks
// outside of the column (anything that's not the search bar or results box).

const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";
 
$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});