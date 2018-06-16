/**
 * @author Atef Ben Ali
 */
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function() {
  // No tabs or host permissions needed!
  chrome.tabs.executeScript({
    code:
      'if(document.getElementsByClassName("CodeMirror-lines")[0]) {' +
      'document.getElementsByClassName("CodeMirror-lines")[0]' +
      '.setAttribute("style", "direction: rtl");' +
      "}" +
      'if(document.getElementById("readme")) {' +
      'document.getElementById("readme")' +
      '.setAttribute("style", "direction: rtl");' +
      "}"
  });
});
