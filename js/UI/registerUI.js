sortApp = sortApp || {};

sortApp.RegisterUI = (function(){

	function createRow(register, container){
		var newCell, cellWidth, cellHeight;
		var row = [];
		for (var i = 0; i < register.length; i++) {
			cellWidth = sortApp.CellPositionLogic.getCellWidth();
			cellHeight = sortApp.CellPositionLogic.getCellHeight();
			container.addChild(createCell(register[i], cellWidth, cellHeight, i));
		}	
		return container;
	}

	function createCell(cellValue, cellWidth, cellHeight, index){
		var square = new createjs.Shape();
		var color = sortApp.CellColorLogic.getCellColor(cellValue);
		square.graphics.beginFill(color).drawRect(index*cellWidth, 0, cellWidth, cellHeight);
		return square;
	}

	return {
		createRow: createRow
	}

})();
