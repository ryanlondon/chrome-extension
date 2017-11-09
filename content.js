chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    const words = request.data;

    $('body').find(words[0]).css({ backgroundColor: words[1] });

});
