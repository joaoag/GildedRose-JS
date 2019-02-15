describe("Gilded Rose: Item", function() {

  it("should store item name, quality and sellIn properties", function() {
    const bread = new Item("Bread", 2, 2);
    expect(bread.name).toEqual("Bread")
    expect(bread.quality).toEqual(2);
    expect(bread.sellIn).toEqual(2);
  });

});