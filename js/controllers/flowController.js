sortApp = sortApp || {};

sortApp.flowController = (function(){

	function play(register){
		if(sortApp.RegisterLogic.isSorted(register) === false){
			return play(getNextStep(register));
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
