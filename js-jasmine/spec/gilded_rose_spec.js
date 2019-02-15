
describe("Gilded Rose", function() {

  it("should Store item name", function() {
    const gildedRose = new Shop([ new Item("Bread", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("Bread");
  });

});
