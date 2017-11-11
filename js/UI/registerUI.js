sortApp = sortApp || {};

sortApp.RegisterUI = (function(){

	function createRow(register, container){
		var newCell, cellWidth;
		var row = [];
		for (var i = 0; i < register.length; i++) {
			var cellWidth = sortApp.CellPositionLogic.getCellWidth(sortApp.AppConfig.registerLength, sortApp.AppConfig.canvasWidth);
			container.addChild(createCell(register[i], cellWidth, i));
		}	
		return container;
	}

	function createCell(cellValue, cellWidth, index){
		var square = new createjs.Shape();
		var color = sortApp.CellColorLogic.getCellColor(cellValue);
		square.graphics.beginFill(color).drawRect(index*cellWidth, 0, cellWidth, cellWidth);
		return square;
	}

	return {
		createRow: createRow
	}

})();
