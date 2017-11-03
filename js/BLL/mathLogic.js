sortApp = sortApp || {};

sortApp.MathLogic = (function(){

	function getRandomNumber(lowerBound, upperBound){
		if(lowerBound !== undefined && upperBound !== undefined){
			return Math.random() * (max - min) + min;
		}
		return Math.random();
	}

	return {
		getRandomNumber: getRandomNumber
	}

})();
