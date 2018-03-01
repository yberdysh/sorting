describe('Bubble Sort', function(){
  var array;
  beforeEach(function() {
    array = [];
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array with a single item', function(){
    expect( bubbleSort([7]) ).toEqual( [7] );
  });

  it('handles an array with a multiple items', function(){
    expect( bubbleSort([7, 3, 6, 1, 9, 4, 2]) ).toEqual([1, 2, 3, 4, 6, 7, 9]);
  });

  it('expect swap to have been called', function(){
    spyOn(window, 'swap').and.callThrough();
    expect( bubbleSort([7, 3, 6, 1, 9, 4, 2]) ).toEqual([1, 2, 3, 4, 6, 7, 9]);
    expect(swap).toHaveBeenCalled();
    expect(swap.calls.count()).toEqual(13);
  });

});
