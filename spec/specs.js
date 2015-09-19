describe('sing', function(){
  it("uses correct last line", function(){
    expect(sing("tea", 0)).to.equal("No more bottles of tea on the wall, no more bottles of tea. Go to the store and buy some more, so many bottles of tea on the wall");
  })
});
