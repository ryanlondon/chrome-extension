chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    const words = request.data;
    const p = document.getElementsByTagName('p')[0];
    p.textContent = words[0];
      console.log(sender.tab ?
              "from a content script:" + sender.tab.url :
              "from the extension: " + words);

      if (request.data == "hello")
          sendResponse({farewell: "goodbye"});
});
