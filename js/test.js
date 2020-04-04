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
  if (input.value != "") {
    for (i = 0; i < searchResults.length; i++) {
      header = searchResults[i].getElementsByTagName("h3")[0];
      headerValue = header.textContent || header.innerText;
      if (headerValue.toUpperCase().indexOf(input.value.toUpperCase()) > -1) {
        searchResults[i].style.display = "";
      } else {
        searchResults[i].style.display = "none";
      }
    }
  } else {
    // Reset the elements visibility.
    for (i = 0; i < searchResults.length; i++) {
      searchResults[i].style.display = "none";
    }
  }
}
