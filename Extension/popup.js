document.getElementById('startClicking').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: startAutoAnswer
      });
    });
  });
  

  function startAutoAnswer() {
    observeQuestionArea();
  }
  