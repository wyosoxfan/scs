function updateCount() {
    // Send the header to be inserted into the search table and update the count.
    //alert("You clicked one of the links!");
}

function openPage(pageURL, elementID, content) {
    updateCount(); // Send the header to be inserted into the search table and update the count.
    window.open(pageURL + "#" + elementID, "_self"); // Open the link in the current window.
    //alert("Page URL: " + pageID + "\n" + "Element ID: " + elementID + "\n" + "Content: " + content);
    // Reset myUL.
    var myUL = document.getElementById("myUL");
    myUL.innerHTML = "";
}

function makeActive(pageURL, elementID, content) {
    // Change the class of the element.
    //alert("Page URL: " + pageURL + "\n" + "Element ID: " + elementID + "\n" + "Content: " + content);
    this.classList.add("active");
}

function removeActive() {
    this.classList.remove("active");
}

function updatePage(list) {
    var myUL = document.getElementById("myUL");
    var searchResults = myUL.getElementsByTagName("li");
    myUL.innerHTML = "";
    for (var i = 0; i < list.length; i++) {                                                              // Generate the results and add to the page...
        var header = list[i][0];                                                                         // The header of the selected data.
        var content = list[i][1];                                                                        // The content of the selected data.
        var elementID = list[i][2];
        var pageURL = list[i][3];
        //var liTemp = "<li class='list-group-item'><a href='" + pageURL + "#" + elementID + "' style='z-index: 1200; color: black;'><div><h5>" + header.split("-", 1) + "</h5><p>" + content + "</p></div></a></li>"; // Create the html template to put into the search results.
        //var liTemp = "<li class='list-group-item'><h5>" + header.split("-", 1) + "</h5><p>" + content + "</p></li>"; // Create the html template to put into the search results.
        var liTemp2 = document.createElement("li");
        //var aTemp = document.createElement("a");
        var headerTemp = document.createElement("h5");
        var pTemp = document.createElement("p");
        liTemp2.classList.add("list-group-item");
        //liTemp2.setAttribute("class", "list-group-item");
        //aTemp.href = pageURL + "#" + elementID;
        //aTemp.setAttribute("style", "color: black;");
        //aTemp.setAttribute("href", pageURL + "#" + elementID);
        //aTemp.href = pageURL;
        //aTemp.style.color = "black";
        headerTemp.innerText = header.split("-", 1);
        pTemp.innerText = content;
        //$(aTemp).append(headerTemp);
        //$(aTemp).append(pTemp);
        //$(liTemp2).append(aTemp);
        //aTemp.appendChild(headerTemp);
        //aTemp.appendChild(pTemp);
        //liTemp2.appendChild(aTemp);
        liTemp2.appendChild(headerTemp);
        liTemp2.appendChild(pTemp);
        liTemp2.addEventListener("click", openPage.bind(null, pageURL, elementID, content));
        liTemp2.addEventListener("mouseover", makeActive);
        liTemp2.addEventListener("mouseout", removeActive);
        //myUL.innerHTML += liTemp;
        //myUL.children[0].addEventListener("click", openPage);
        //liTemp.onclick(updateCount);
        //liTemp2.addEventListener("click", function(){ openPage(pageURL, elementID) });
        myUL.appendChild(liTemp2);                                                                       // Add the template to the list.
        //myUL.children[i].addEventListener("click", function(){ openPage(pageURL.valueOf(), elementID.valueOf()) });
        //$(myUL).append(liTemp2);
    }

    //myUL.childNodes.forEach(item => item.addEventListener("click", function() { openPage }));                            // Add event listeners.
    //myUL.childNodes.forEach(item => item.addEventListener("mouseover", makeActive));
    //myUL.childNodes.forEach(item => item.addEventListener("mouseout", removeActive));
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

        for (var i = 0; i < data.length && i < 25; i++) {
            var header = data[i][6]; // Get the header.
            var content = data[i][3]; // Get the content.
            var elementID = data[i][1]; // Get the element ID.
            var pageURL = data[i][8]; // Get the page URL.
            list.push([header, content, elementID, pageURL]);
        }

        updatePage(list);
    });
}

function searching() {
    var input = document.getElementById("text_box");

    // OTHER SEARCH FUNCTIONALITY HERE...
    // For each possible search result in searchResults...
    var dropdown = document.getElementById("dropdownList");
    var dropdownContainer = document.getElementById("dropdown-container");
    if (input.value.length > 1) {
        dropdown.style.visibility = "visible";
        dropdown.style.display = "";
        dropdownContainer.style.display = "";
        // Get the data from the database...
        loadSearchResults(input.value);
    } else {
        dropdown.style.visibility = "visible";
        dropdown.style.display = "";
        dropdownContainer.style.display = "";
        var myUL = document.getElementById("myUL");
        myUL.innerHTML = "";
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
function openWindows() {
    if (typeof openWindows.isOpen == 'undefined') {
        openWindows.isOpen = false;
    }
    alert(openWindows.isOpen);
    if (openWindows.isOpen == false) {
        window.open("articles.html", "_blank");
        window.open("case-management.html", "_blank");
        window.open("child-adolescents.html", "_blank");
        window.open("child-calendar.html", "_blank");
        window.open("consent-to-treat.html", "_blank");
        window.open("contact-us.html", "_blank");
        window.open("employee-center.html"), "_blank";
        window.open("employment.html", "_blank");
        window.open("get-started.html", "_blank");
        window.open("help-family.html", "_blank");
        window.open("help-friend.html", "_blank");
        window.open("help-myself.html", "_blank");
        window.open("medical-services.html", "_blank");
        window.open("mental-health-calendar.html", "_blank");
        window.open("mental-health.html", "_blank");
        window.open("payment-info.html", "_blank");
        window.open("Prevention.html", "_blank");
        window.open("psychiatric-services.html", "_blank");
        window.open("psychological-evaluations.html", "_blank");
        window.open("psychosocial-calendar.html", "_blank");
        window.open("psychosocial.html", "_blank");
        window.open("resources.html", "_blank");
        window.open("substance-abuse-calendar.html", "_blank");
        window.open("substance-abuse.html", "_blank");
        window.open("suicide-prevention.html", "_blank");
    }

    openWindows.isOpen = true;
    alert(openWindows.isOpen);
}

//var path = window.location.href;

/*if (path == 'http://www.swcounseling.org/test/') {
    openWindows();
}*/

/* var pageTitle = document.title;                           // Get the name of the page.
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
    window.close();
}); */

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