// Function to handle the search action
import {baseurl} from "./baseurl.js";
function handleSearch() {
    const input = document.getElementById('searchInput').value.trim();
    if (input) {
        alert(`You searched for: ${input}`);
        // Add your custom search logic here
        // Example: Redirect to a search results page
        // window.location.href = `search-results.html?query=${encodeURIComponent(input)}`;
    } else {
        alert('Please enter a search term.');
    }
}

// Add "Enter" key support

document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleSearch();
    }
});
function login() {
    alert("Redirecting to Login...");
    // Add your login logic here, e.g., redirect to a login page
}

function signup() {
    alert("Redirecting to Sign Up...");
    // Add your sign-up logic here, e.g., redirect to a sign-up page
}

 // Function to get the selected option
 function getSelectedOption() {
    const dropdown = document.getElementById('nutrition');
    const selectedValue = dropdown.value;
    const selectedText = dropdown.options[dropdown.selectedIndex].text;
    alert(`You selected: ${selectedText} (${selectedValue})`);
}
document.addEventListener("DOMContentLoaded", () => {
    console.log("Offer card loaded!");
  });