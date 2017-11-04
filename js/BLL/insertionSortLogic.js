sortApp = sortApp || {};

sortApp.InsertionSortLogic = (function(){

	var state = {
		i: 1
	}

	function sort(register){

		if(state.i < register.length){
			var j = state.i;
			while(j > 0 && register[j-1] > register[j]){
				register = sortApp.RegisterLogic.swap(register, j, j-1);
				j--;
			}
			state.i++;
			return register;
		}
		return register;
	}

	return {
		sort: sort
	}

})();
