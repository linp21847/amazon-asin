/**
 *	Written by Paul
 *	contact	linp21847@gmail.com	
*/


console.log("Hlskdjflksjdlfkdj");

$(document).ready(function() {

	var indexOfCode = -1;
	var asinCode;
	$("#detail-bullets div.content ul li").each( function( index ) {
		var content = $( this ).text();
		if ( $($(this).find("b")[0]).text().trim() === "ASIN:" ) {
			indexOfCode = index;
			asinCode = content.substr("ASIN: ".length);
			alert(asinCode);
		}
	});

	if ( indexOfCode == -1 ) {
		alert("Cannot find ASIN CODE!");
	};

	var	extensionButtonHandler = function(event) {

		chrome.runtime.sendMessage({
			msg: "asin",
			data: {}
		}, function(response) {
			console.log(response);
		});
	};

});

	// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	// 	switch(request.msg) {
	// 		case "api-callback":
	// 			console.log(request.data);
	// 			break;
	// 	}
	// })