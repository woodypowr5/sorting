var sortApp = (function(){

	function initialize(options){
		return sortApp.InitializeController.initialize(options);
	}
	
	function play(register){
		return sortApp.flowController.play(register);
	}

	return {
		initialize: initialize,
		play: play
	}

})();

