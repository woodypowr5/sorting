sortApp = sortApp || {};

sortApp.flowController = (function(){

	function play(register){
		if(isSorted(register) === false){
			return play(getNextStep(register));
		}

	}

	function getNextStep(register){
		return sortApp.SortController.doSort(register, sortApp.AppConfig.sortType, 'step')
	}

	function isSorted(register){
		return sortApp.RegisterLogic.isSorted(register)
	}

	return {
		play: play
	}

})();
