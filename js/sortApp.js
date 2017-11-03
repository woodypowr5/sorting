var sortApp = (function(){

	function initialize(options){
		return sortApp.InitializeController.initialize(options);
	}
	
	function play(register){
		return playController.play();
	}

	return {
		initialize: initialize,
		play: play
	}

})();

