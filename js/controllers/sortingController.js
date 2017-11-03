sortApp = sortApp || {};

sortApp.SortingController = (function(){

	// var state = {
	// 	register: []
	// }

	function initialize(initialState, registerLength){
		return sortApp.RegisterController.initializeRegister(initialState, registerLength);
	}

	function doSort(sortType, completion){
		
	}

	return {
		doSort: doSort,
		initialize: initialize
	}

})();
