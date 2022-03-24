/**
 * simulate a right-click event so we can grab the image URL using the
 * context menu alleviating the need to navigate to another page
 *
 * attributed to @jmiserez: http://pyimg.co/9qe7y
 *
 * @param   {object}  element  DOM Element
 *
 * @return  {void}
 */
function simulateRightClick(element) {
    var event1 = new MouseEvent('mousedown', {
        bubbles: true,
        cancelable: false,
        view: window,
        button: 2,
        buttons: 2,
        clientX: element.getBoundingClientRect().x,
        clientY: element.getBoundingClientRect().y
    });
    element.dispatchEvent(event1);
    var event2 = new MouseEvent('mouseup', {
        bubbles: true,
        cancelable: false,
        view: window,
        button: 2,
        buttons: 0,
        clientX: element.getBoundingClientRect().x,
        clientY: element.getBoundingClientRect().y
    });
    element.dispatchEvent(event2);
    var event3 = new MouseEvent('contextmenu', {
        bubbles: true,
        cancelable: false,
        view: window,
        button: 2,
        buttons: 0,
        clientX: element.getBoundingClientRect().x,
        clientY: element.getBoundingClientRect().y
    });
    element.dispatchEvent(event3);
}

/**
 * grabs a URL Parameter from a query string because Google Images
 * stores the full image URL in a query parameter
 *
 * @param   {string}  queryString  The Query String
 * @param   {string}  key          The key to grab a value for
 *
 * @return  {string}               value
 */
function getURLParam(queryString, key) {
    var vars = queryString.replace(/^\?/, '').split('&');
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split('=');
        if (pair[0] == key) {
            return pair[1];
        }
    }
    return false;
}

/* Test download */
function downloadFile(options) {
    if (!options.url) {
        var blob = new Blob([options.content], { type: "text/plain;charset=UTF-8" });
        options.url = window.URL.createObjectURL(blob);
    }
    chrome.downloads.download({
        url: options.url,
        filename: options.filename
    })
}

/**
 * Generate and automatically download a txt file from the URL contents
 *
 * @param   {string}  contents  The contents to download
 *
 * @return  {void}
 */
function createDownload(contents) {
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:attachment/text,' + encodeURI(contents);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'urls_database.txt';
    hiddenElement.click();
}

/* Faire défiler jusqu'à avoir le nombre d'images souhaité */
function scrollAuto(nb) {

    //Compter le nombre d'images sur la page

    // Array.prototype.forEach.call(document.querySelectorAll(
    //     '.isv-r a:first-of-type'), function (element) {
    //         nbElements = nbElements + 1;
    //         lastImage = element;
    //     });
    var increment = 500;
    var nbImage = 0;
    var nodes;
    while (nbImage < nb) {
        nodes = document.querySelectorAll(
            '.isv-r a:first-of-type')
        nbImage = nodes.length;

        console.log(nbImage - 1);
        setTimeout(function () { window.scrollBy(0, window.innerHeight); }, 5000)
        //console.log(nbImage);
        increment = increment + 5000;
    }

}



/**
 * grab all URLs va a Promise that resolves once all URLs have been
 * acquired
 *
 * @return  {object}  Promise object
 */
function grabUrls(nbElements) {
    var urls = [];
    return new Promise(function (resolve, reject) {
        var count = document.querySelectorAll(
            '.isv-r a:first-of-type').length,
            index = 0;

        //scrollAuto(nbElements);

        Array.prototype.forEach.call(document.querySelectorAll(
            '.isv-r a:first-of-type'), function (element) {
                // using the right click menu Google will generate the
                // full-size URL; won't work in Internet Explorer
                // (http://pyimg.co/byukr)
                simulateRightClick(element.querySelector(':scope img'));
                // Wait for it to appear on the <a> element
                var interval = setInterval(function () {
                    if (element.href.trim() !== '') {
                        clearInterval(interval);
                        // extract the full-size version of the image
                        let googleUrl = element.href.replace(/.*(\?)/, '$1'),
                            fullImageUrl = decodeURIComponent(
                                getURLParam(googleUrl, 'imgurl'));
                        if (fullImageUrl !== 'false') {
                            urls.push(fullImageUrl);
                        }
                        // sometimes the URL returns a "false" string and
                        // we still want to count those so our Promise
                        // resolves
                        index++;
                        if (index == (count - 1)) {
                            resolve(urls);
                        }
                    }
                }, 10);
            });
    });
}

grabUrls(1000).then(function (urls) {
    urls = urls.join('\n');
    createDownload(urls);

});
