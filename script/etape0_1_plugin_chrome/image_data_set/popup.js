document.addEventListener('DOMContentLoaded', () => {
    var checkPageButton = document.getElementById('btn');
    checkPageButton.addEventListener('click', () => {
        /**
         * Call the main function to grab the URLs and initiate the download
         */
        chrome.tabs.executeScript(null, {
            file: "content.js"
        });
    }, false);
}, false);