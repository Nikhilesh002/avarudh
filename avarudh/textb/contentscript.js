// Content script
chrome.runtime.sendMessage({ action: "filterText", text: document.body.innerHTML }, function (response) {
  document.body.innerHTML = response.filteredText;
});