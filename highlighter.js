document.addEventListener('DOMContentLoaded', function() {
  const wordsInput = document.getElementById('words-input');
  const regex = /,+\b|,+\s/g;
  let searchWords = [];
  let colors = ['#38C0C5', '#D73052', '#007D96', '#A6CE39', '#EDD500'];


  function assignNextColor() {
    return;
  }

  
  wordsInput.addEventListener('keyup', function(e) {
    searchWords = wordsInput.value.split(regex);

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {data: searchWords}, function(response) {
          console.log(response.farewell);
      });
    });
  });

});