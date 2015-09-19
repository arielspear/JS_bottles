describe('sing', function() {
  it("uses correct last line", function() {
    expect(sing("tea", 0)).to.equal("No more bottles of tea on the wall, no more bottles of tea. Go to the store and buy some more, so many bottles of tea on the wall. ");
  })
  it("correctly sings with one bottle left", function() {
    expect(sing("juice", 1)).to.equal("1 bottle of juice on the wall, 1 bottle of juice. Take one down, pass it around no more bottles of juice on the wall. ");
  })
});
