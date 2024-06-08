document.addEventListener('DOMContentLoaded', function() {
  // Get the checkbox element
  var obsceneToggle = document.getElementById('obsceneToggle');

  // Load the filterEnabled state from storage
  chrome.storage.sync.get("filterEnabled", data => {
      // Set the checkbox state based on the stored filterEnabled value
      obsceneToggle.checked = data.filterEnabled;

      // Add event listener to the checkbox to toggle filter state
      obsceneToggle.addEventListener('change', function() {
          // Send a message to background script to toggle filter state
          chrome.runtime.sendMessage({ action: "toggleFilter" }, function(response) {
              // Update checkbox state based on the response
              obsceneToggle.checked = response.filterEnabled;
          });
      });
  });
});
