describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here 
    expect( split([1,2,3,4,5,6,7]) ).toEqual( [[1,2,3],[4,5,6,7]]);
  });

  it('is able to merge two arrays into one', function() {
    // your code here 
    expect( merge([1,2,3,],[4,5,6,7]) ).toEqual( [1,2,3,4,5,6,7]);
  });

  it('is able sort an array', function() {
    // your code here 
    expect( mergeSort([6,7,5,3,4,1,2])).toEqual( [1,2,3,4,5,6,7]);
  });
});

/*
  beforeEach(function() {
    
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


  it('expect 49 comparisons to have been made', function(){
    spyOn(window, 'compare').and.callThrough();
    expect( bubbleSort([7, 3, 6, 1, 9, 4, 2]) ).toEqual([1, 2, 3, 4, 6, 7, 9]);
    expect(compare).toHaveBeenCalled();
    expect(compare.calls.count()).toEqual(49);
  });*/