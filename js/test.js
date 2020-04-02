function searching() {
    document.getElementById("dropdownList").style.visibility = "visible";
    var input = document.getElementById("text_box");
    var searchResults = document.getElementsByTagName("li");

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
    }
}

var searchBar = document.getElementById("text_box");
var dropdownList = document.getElementById("dropdownList");
searchBar.addEventListener("input", searching);
searchBar.addEventListener("focusin", searching);
searchBar.addEventListener("focusout", hide);
dropdownList.addEventListener("focusin", searching);

// NOTE: We need to make it so the search bar results disappear when the user clicks
// outside of the column (anything that's not the search bar or results box).