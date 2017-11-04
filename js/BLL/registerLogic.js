sortApp = sortApp || {};

sortApp.RegisterLogic = (function(){

	function isSorted(register, index){
		if(index == undefined) index = 0;

		if(index === register.length-1){
			return true;
		}

		if(register[index+1] > register[index]){
			return isSorted(register, index+1);
		}

		return false;
	}

	function swap(register, index1, index2){
		var item1 = register[index1];
		var item2 = register[index2];
		register[index1] = item2;
		register[index2] = item1;
		return register;
	}

	return {
		isSorted: isSorted,
		swap: swap
	}

})();
