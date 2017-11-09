chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      console.log(sender.tab ?
              "from a content script:" + sender.tab.url :
              "from the extension: " + request.data);

      if (request.data == "hello")
          sendResponse({farewell: "goodbye"});
});
