
document.addEventListener('DOMContentLoaded', function() {
  const wordsInput = document.getElementById('words-input');
  const regex = /,+\b|,+\s/g;
  let searchWords = [];
  let colors = ['#38C0C5', '#D73052', '#007D96', '#A6CE39', '#EDD500'];


  function assignNextColor() {
    return;
  }
  
  wordsInput.addEventListener('keydown', function(e) {
    searchWords = wordsInput.value.split(regex);
    if(searchWords){
      chrome.tabs.query({ active:true, currentWindow:true }, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, { file: background.js } );
        chrome.tabs.sendMessage(tabs[0].id, { method: 'search', searchText: searchWords });
      });
  });

});





// document.addEventListener('DOMContentLoaded', function() {
//   var checkPageButton = document.getElementById('checkPage');
//   checkPageButton.addEventListener('click', function() {

//     chrome.tabs.getSelected(null, function(tab) {
//       d = document;

//       var f = d.createElement('form');
//       f.action = 'http://gtmetrix.com/analyze.html?bm';
//       f.method = 'post';
//       var i = d.createElement('input');
//       i.type = 'hidden';
//       i.name = 'url';
//       i.value = tab.url;
//       f.appendChild(i);
//       d.body.appendChild(f);
//       f.submit();
//     });
//   }, false);
// }, false);