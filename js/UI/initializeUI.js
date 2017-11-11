sortApp = sortApp || {};

sortApp.InitializeUI = (function(){

	function initialize(canvasElement){
		return new createjs.Stage(sortApp.Constants.canvas.id);
	}

	return {
		initialize: initialize
	}

})();