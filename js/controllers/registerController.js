sortApp = sortApp || {};

sortApp.RegisterController = (function(){

	function initializeRegister(initialState, registerLength){
		
		var register = createRandomRegister(registerLength);
		if(initialState === 'random'){
			return register;
		}
	}

	function createRandomRegister(registerLength){
		register = [];
		for (var i = 0; i < registerLength; i++) {
			register[i] = sortApp.MathLogic.getRandomNumber();
		}
		return register;
	}

	return {
		initializeRegister: initializeRegister
	}

})();
