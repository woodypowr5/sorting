describe('RegisterLogic', function(){

	var sut = sortApp.RegisterLogic;

	describe('isSorted', function(){

		it('should return true if the array is sorted', function(){

			var register = [0,1,2];

			var expected = true;
			var actual = sut.isSorted(register);

			expect(actual).toEqual(expected);

		});

		it('should return false if the array is unsorted', function(){

			var register = [0,2,1];

			var expected = false;
			var actual = sut.isSorted(register);

			expect(actual).toEqual(expected);

		});

		it('should return false if the array is sorted except for the last two elements', function(){

			var register = [0,1,2, 3, 5, 4];

			var expected = false;
			var actual = sut.isSorted(register);

			expect(actual).toEqual(expected);

		});

	});

	describe('swap', function(){

		it('Should swap two elements in the array', function(){

			var register = [0,1,2,3,4,5];

			var expected = [1,0,2,3,4,5];
			var actual = sut.swap(register, 0, 1);

			expect(actual).toEqual(expected);

		});

	});	

});