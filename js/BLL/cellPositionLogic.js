sortApp = sortApp || {};

sortApp.CellPositionLogic = (function(){

	function getCellWidth(registerLength, canvasWidth){
		return canvasWidth/registerLength;
	}

	return {
		getCellWidth: getCellWidth
	}

})();