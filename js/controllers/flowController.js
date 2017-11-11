sortApp = sortApp || {};

sortApp.flowController = (function(){

	function play(register){
		var newRegister;
		if(sortApp.RegisterLogic.isSorted(register) === false){
			newRegister = getNextStep(register);
			setTimeout(function() {play(register)}, 1/sortApp.Constants.speed[sortApp.AppConfig.speed]*1000);
		}
		return;
	}

	function getNextStep(register){
		var newRegister = sortApp.SortingController.doSort(register, sortApp.AppConfig.sortType, 'step');
		sortApp.UIController.drawNextStep(register);
		return newRegister;
	}

	return {
		play: play
	}

})();
