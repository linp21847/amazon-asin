/**
 *	iFrond REST API JavaScript Library
 *	Written by Paul
 *	contact	linp21847@gmail.com	
*/

var iFrondAPI = {
	/**
	 *	iFrond API Base URL
	*/
	baseUrl: "http://mll.dev.ifrond.com/api1/",

	/**
	 *	iFrond REST API EndPoints
	*/
	endPoints: {
		storeVisit: "st_3/visit",
		template: "st_3/template"
	},

	/**
	 *	iFrond REST API storeVisit EndPoint implementation
	*/
	storeVisit: function(params, successFunc, failFunc) {
		var self = this,
			tempFunc = function(params) {
				console.log(params);
			};
		if (!successFunc)
			successFunc = tempFunc;
		
		if (!failFunc)
			failFunc = tempFunc;

		$.ajax({
			url: self.baseUrl + self.endPoints.storeVisit,
			params: params,
			type: "get",
			success: successFunc,
			error: failFunc
		});
	},

	/**
	 *	iFrond REST API template EndPoint implementation
	*/
	template: function(params, successFunc, failFunc) {
		var self = this,
			tempFunc = function(params) {
				console.log(params);
			};
		if (!successFunc)
			successFunc = tempFunc;
		
		if (!failFunc)
			failFunc = tempFunc;

		$.ajax({
			url: self.baseUrl + self.endPoints.template,
			params: params,
			type: "get",
			success: successFunc,
			error: failFunc
		});
	}
};