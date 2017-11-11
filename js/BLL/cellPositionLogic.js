sortApp = sortApp || {};

sortApp.CellPositionLogic = (function(){

	function getCellWidth(registerLength, canvasWidth){
		return Math.floor(canvasWidth/registerLength);
	}

	return {
		getCellWidth: getCellWidth
	}

})();