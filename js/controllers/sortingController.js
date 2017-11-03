sortApp = sortApp || {};

sortApp.SortingController = (function(){

	function initialize(initialState, registerLength){
		return sortApp.RegisterController.initializeRegister(initialState, registerLength);
	}

	function doSort(register, sortType, degreeOfCompletion){
		if(sortType === 'insertionSort'){
			return sortApp.insertionSortLogic.sort(register, degreeOfCompletion);
		}
	}

	return {
		doSort: doSort,
		initialize: initialize
	}

})();
