sortApp = sortApp || {};

sortApp.BubbleSortLogic = (function(){

	var state = {
		index: 1,
		swapped: false
	}

	function sort(register){

		if(state.index === register.length){
			state.index = 1;
		}

		if(register[state.index-1] > register[state.index]){
			register = sortApp.RegisterLogic.swap(register, state.index, state.index-1);
		}
		console.log(state.index)
		state.index++;
		return register
	}

	return {
		sort: sort
	}


})();