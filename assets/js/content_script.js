/**
 *	iFrond Chrome Extension Content Script
 *	Written by Paul
 *	contact	linp21847@gmail.com	
*/

(function(window, jQuery) {

	$(document).ready(function() {
		var addExtensionStyleSheetsFile = function(fileName) {
				var $header = $("head"),
					$newStyleSheet = $("<link/>", {
						rel: "stylesheet",
						type: "text/css",
						href: chrome.extension.getURL("assets/css/" + fileName)
					});

				$header.append($newStyleSheet);
			},

			$extensionButtonContainer = $("div.qks-group-page-wrap ul.qks-group-page"), // Extension Button container
			$extensionButtonWrapper = $("<li/>", {	// Extension Button container
					class: "qks-group-page-item extensionButton-container"
				}),
			$extensionButton = $("<button/>", {	// // Extension Button
					class: "quick-key quick-key--green extension-button"
				}).text("Extension Button"),

			extensionButtonHandler = function(event) {
				console.log("Extension Button Clicked");

				chrome.runtime.sendMessage({
					msg: "api",
					data: {}
				}, function(response) {
					console.log(response);
				});
			};

		if ($extensionButtonContainer.length === 0) {
			console.log("Button container not found...");
		} else {
			addExtensionStyleSheetsFile("style.css");

			$extensionButtonWrapper.appendTo($extensionButtonContainer);
			$extensionButtonWrapper.append($extensionButton);
			$extensionButton.click(extensionButtonHandler);
		}
	});

	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		switch(request.msg) {
			case "api-callback":
				console.log(request.data);
				break;
		}
	})
})(window, $)