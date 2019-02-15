
describe("Gilded Rose", function() {

  it("should update item quality", function() {
    const gildedRose = new Shop([ new Item("Bread", 2, 2) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(1);
  });


});
