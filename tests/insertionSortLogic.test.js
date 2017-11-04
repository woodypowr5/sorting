describe('InsertionSortLogic', function(){

	var sut = sortApp.InsertionSortLogic;

	describe('swap', function(){

		it('should return the array if it is sorted', function(){

			var register = [0,1,2,3,4,5];

			var expected = [0,1,2,3,4,5];
			var actual = sut.sort(register);

			expect(actual).toEqual(expected);

		});

		it('should return the next sort step of an unsorted array if the current element is not already in place', function(){

			var register = [0, 3, 2, 5, 4];

			var expected = [0, 2, 3, 5, 4];
			var actual = sut.sort(register);

			expect(actual).toEqual(expected);

		});

		it('should return the next sort step of an unsorted array if the current element is already in place', function(){

			var register = [0, 1, 3, 5, 4];

			var expected = [0, 1, 3, 5, 4];
			var actual = sut.sort(register);

			expect(actual).toEqual(expected);

		});

	});	

});