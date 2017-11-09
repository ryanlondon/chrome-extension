chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  console.log(message.searchText);
  // message.searchText is the text that was captured in the popup    
  // Search/Highlight code goes here
});