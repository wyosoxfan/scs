function getData(str) {
    var xhttp;
    if (str == ""){
        // Do something if there's nothing returned.
    }

    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Update the list shown to the user.
            //alert("Found!");
            //alert(this.responseText);
        }
    };
    //alert("Sending xhttp!");
    xhttp.open("GET", "./searchbardb/index.php?q=" + str, true);
    xhttp.send();
}

function searching() {
	var dropdown = document.getElementById("dropdownList");
	var dropdownContainer = document.getElementById("dropdown-container");
	dropdown.style.visibility = "visible";
	dropdown.style.display = "";
	dropdownContainer.style.display = "";
    var input = document.getElementById("text_box");
	var myUL = document.getElementById("myUL");
    var searchResults = myUL.getElementsByTagName("li");

    // OTHER SEARCH FUNCTIONALITY HERE...
    // For each possible search result in searchResults...
    if (input.value != ""){
        // Get the data from the database...
        getData(input.value);

        // Search the data for the input...
        // Display the results...
        for (i = 0; i < searchResults.length; i++){
            header = searchResults[i].getElementsByTagName("h3")[0];
            headerValue = header.textContent || header.innerText;
            if (headerValue.toUpperCase().indexOf(input.value.toUpperCase()) > -1){
                searchResults[i].style.display = "";
            } else {
                searchResults[i].style.display = "none";
            }
        }
    } else {
        // Reset the elements visibility.
        for (i = 0; i < searchResults.length; i++){
            searchResults[i].style.display = "none";
        }
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
searchbarContainer.style.visibility = "hidden";
//searchbarContainer.style.display = "none";
searchBar.addEventListener("input", searching);
searchBar.addEventListener("focusin", searching);
searchBar.addEventListener("focusout", hide);
dropdownList.addEventListener("mouseleave", hide);
dropdownList.addEventListener("focusin", searching);
mapButton.addEventListener("click", clickMapView);
mapButton.addEventListener("mouseover", enableMapView);
mapButton.addEventListener("mouseleave", disableMapView);
mapView.addEventListener('mouseenter', enableMapView);
mapView.addEventListener('mouseleave', disableMapView);

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