
describe("Gilded Rose", function() {

  it("reduces item quality over time", function() {
    const gildedRose = new Shop([ new Item("Bread", 2, 2) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(1);
  });

  it("updates item sellIn", function() {
    const gildedRose = new Shop([ new Item("Bread", 2, 2) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(1);
  });

  it("degrades quality x2 speed once SellIn passes", function() {
    const gildedRose = new Shop([ new Item("rottenBread", 0, 2) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  }); 

    it("does not allow item quality to go < 0", function() {
    const gildedRose = new Shop([ new Item("rottenBread", 0, 2) ]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });  


});
