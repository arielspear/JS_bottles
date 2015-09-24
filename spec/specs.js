describe('sing', function() {
  it("uses correct last line", function() {
    expect(sing("tea", 0)).to.equal("No more bottles of tea on the wall, no more bottles of tea. Go to the store and buy some more, so many bottles of tea on the wall. <br>");
  })
  it("correctly sings with one bottle left", function() {
    expect(sing("juice", 1)).to.equal("1 bottle of juice on the wall, 1 bottle of juice. Take one down, pass it around no more bottles of juice on the wall. <br>No more bottles of juice on the wall, no more bottles of juice. Go to the store and buy some more, so many bottles of juice on the wall. <br>");
  })
  it("sings with more than one bottle left", function() {
    expect(sing("coffee", 4)).to.equal("4 bottles of coffee on the wall, 4 bottles of coffee. Take one down, pass it around 3 bottles of coffee on the wall. <br>3 bottles of coffee on the wall, 3 bottles of coffee. Take one down, pass it around 2 bottles of coffee on the wall. <br>2 bottles of coffee on the wall, 2 bottles of coffee. Take one down, pass it around 1 bottles of coffee on the wall. <br>1 bottle of coffee on the wall, 1 bottle of coffee. Take one down, pass it around no more bottles of coffee on the wall. <br>No more bottles of coffee on the wall, no more bottles of coffee. Go to the store and buy some more, so many bottles of coffee on the wall. <br>");
  })
  it("treats degative numbers as zero", function() {
    expect(sing("water", -1)).to.equal("No more bottles of water on the wall, no more bottles of water. Go to the store and buy some more, so many bottles of water on the wall. <br>");
  })
  it("won't have extra numbers", function() {
    expect(sing("beer", 2)).to.not.include("3");
  })
});
