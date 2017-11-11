sortApp = sortApp || {};

sortApp.CellPositionLogic = (function(){

	function getCellWidth(){
		return Math.floor(sortApp.AppConfig.canvasWidth/sortApp.AppConfig.registerLength);
	}
	function getCellHeight(){
		// console.log(sortApp.AppConfig)
		return Math.floor((getCellWidth())*sortApp.AppConfig.cellHeightMultiplier);
	}

	return {
		getCellWidth: getCellWidth,
		getCellHeight: getCellHeight
	}

})();