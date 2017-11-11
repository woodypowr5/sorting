sortApp = sortApp || {};

sortApp.CellColorLogic = (function(){

	function getCellColor(cellValue){
		console.log(cellValue)
		if(sortApp.AppConfig.colors === 'grayscale'){
			return 'rgb('+Math.floor(255*cellValue)+', '+Math.floor(255*cellValue)+', '+Math.floor(255*cellValue)+')';
		}
	}

	return {
		getCellColor: getCellColor
	}

})();