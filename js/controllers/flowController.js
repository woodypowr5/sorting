sortApp = sortApp || {};

sortApp.flowController = (function(){

	function play(register){
		if(isSorted(register) === false){
			return play(getNextStep(register));
		}
		return;
	}

	function getNextStep(register){
		var newRegister = sortApp.SortingController.doSort(register, sortApp.AppConfig.sortType, 'step');
		sortApp.DrawUI.drawRow(register);
		return newRegister;
	}

	function isSorted(register){
		console.log(register)
		return sortApp.RegisterLogic.isSorted(register)
	}

	return {
		play: play
	}

})();
