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
    }
}

function enableMapView() {
    var mapView = document.getElementById("mapView");
    if (mapView.style.visibility != "visible") {
        mapView.style.visibility = "visible";
        mapView.style.display = "";
    } else {
        mapView.style.visibility = "hidden";
        mapView.style.display = "none";
    }
    document.getElementById("map-square").removeEventListener("click", enableMapView);
}

var searchBar = document.getElementById("text_box");
var dropdownList = document.getElementById("dropdownList");
var mapButton = document.getElementById("map-square");
searchBar.addEventListener("input", searching);
searchBar.addEventListener("focusin", searching);
searchBar.addEventListener("focusout", hide);
dropdownList.addEventListener("focusin", searching);
mapButton.addEventListener("click", enableMapView);

// NOTE: We need to make it so the search bar results disappear when the user clicks
// outside of the column (anything that's not the search bar or results box).