sortApp = sortApp || {};

sortApp.SortingController = (function(){

	function initialize(initialState, registerLength){
		return sortApp.RegisterController.initializeRegister(initialState, registerLength);
	}

	function doSort(register, sortType){
		if(sortType === 'insertionSort'){
			return sortApp.InsertionSortLogic.sort(register);
		} else if(sortType === 'bubbleSort'){
			return sortApp.BubbleSortLogic.sort(register);
		}
	}

	return {
		doSort: doSort,
		initialize: initialize
	}

})();
