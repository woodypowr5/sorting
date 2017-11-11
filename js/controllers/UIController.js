sortApp = sortApp || {};

sortApp.UIController = (function(){

	var state = this.state;

	state = {
		stage: null,
		rows: [],
		currentRow: 0
	}

	function initializeUI(){
		state.stage = sortApp.InitializeUI.initialize();
	}

	function drawNextStep(register){
		var newRow = new createjs.Container();
		newRow.y = getRowPosition();
		sortApp.RegisterUI.createRow(register, newRow);
		state.rows.push(newRow);
		state.stage.addChild(newRow)
		state.stage.update();
		state.currentRow++;
	}

	function getRowPosition(){
		return sortApp.CellPositionLogic.getCellWidth(sortApp.AppConfig.registerLength, sortApp.AppConfig.canvasWidth) * state.currentRow;
	}

	return {
		initializeUI: initializeUI,
		drawNextStep: drawNextStep
	}

})();
