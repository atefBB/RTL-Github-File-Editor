// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function() {
  // No tabs or host permissions needed!
  chrome.tabs.executeScript({
    code: 'document.getElementsByClassName("CodeMirror-lines")[0]'
          + '.setAttribute("style", "direction: rtl");'
  });
});
