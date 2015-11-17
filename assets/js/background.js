/**
 *	iFrond Chrome Extension Background Script
 *	Written by Paul
 *	contact	linp21847@gmail.com	
*/


(function(window, jQuery){
	var apiBaseUrl = "http://mll.dev.ifrond.com/api1/st_3/visit"

	console.log("Extension is installed.");

	chrome.runtime.onMessage.addListener(function(params, sender, sendResponse) {
		switch(params.msg) {
			case "api":
				console.log(params);
				console.log(sender);

				iFrondAPI.storeVisit(
					null,
					function(response) {	//	Ajax call success handler
						console.log("success");
						console.log(response);
						chrome.tabs.sendMessage(
							sender.tab.id, 
							{
								msg: "api-callback",
								data: response
							}
						);
					},
					function() {	//	Ajax call failure handler
						console.log("Error found in ajax call");
						chrome.tabs.sendMessage(
							sender.tab.id, 
							{
								msg: "api-callback",
								data: {
									status: false
								}
							}
						);
					}
				);
				break;

			default:
				break;
		}
	})
})(window, $);