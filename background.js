chrome.webRequest.onBeforeRequest.addListener(
    function(details) {return{cancel: true}},
    {urls: ["*://*.doubleclick.net/*", "*://*connect.facebook.net/*", "*://*.googleadservices.com/*", "*://*.googleanalytics.com/*", "ads.google.com/*", "*://*.securepubads.g.doubleclick.net/*", "*://*.ads.doubleclick.net/*", "*://*.googleads.g.doubleclick.net/8"]},
    ["blocking"] 
)
