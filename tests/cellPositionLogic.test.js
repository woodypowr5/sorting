describe('CellPositionLogic', function(){

	var sut = sortApp.CellPositionLogic;

	describe('getCellWidth', function(){

		it('Should return the correct width based on the canvas width and number of cells', function(){

			var registerLength = 8;
			var canvasWidth = 480;

			var expected = 60;
			var actual = sut.getCellWidth(registerLength, canvasWidth);

			expect(actual).toEqual(expected);

		});

	});

});