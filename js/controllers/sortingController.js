sortApp = sortApp || {};

sortApp.SortingController = (function(){

	function initialize(initialState, registerLength){
		return sortApp.RegisterController.initializeRegister(initialState, registerLength);
	}

	function doSort(register, sortType, degreeOfCompletion){
		if(sortType === 'insertionSort'){
			return sortApp.InsertionSortLogic.sort(register);
		}
	}

	return {
		doSort: doSort,
		initialize: initialize
	}

})();
