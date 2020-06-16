function main() {
  chrome.tabs.getSelected(null, function(tab) {
    var url = tab.url;
    var watchID = getWatchID(url);
    var embedded = getEmbeddedUrl(watchID);
    window.open(embedded);
  } );
}

 var temp = "https://www.youtube.com/watch?v=mi5OlUE3BLc";

function getWatchID(url) {
  var arr = url.split("=");
  return arr[1];
}

function getEmbeddedUrl(id) {
  var base = "https://www.youtube.com/embed/";
  return base + id;
}

function clickHandler(e) {
  setTimeout(main, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('button').addEventListener('click', clickHandler);
});
