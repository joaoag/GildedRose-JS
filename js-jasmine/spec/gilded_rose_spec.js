
describe("Gilded Rose", function() {

  it("reduces item quality over time", function() {
    const gildedRose = new Shop([ new Item("Bread", 2, 2) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(1);
  });

  it("reduces item sellIn over time", function() {
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

  it("updateQuality *increases* the quality of Brie over time", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 0, 1) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(3);
  });

  it("updateQuality limits the quality all normal items to 50", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 0, 49) ]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

  it("updateQuality knows that Sulfuras's quality is 80", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(80);
  });
  
  it("updateQuality never decreases 'Sulfuras, Hand of Ragnaros's quality", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 50) ]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

  it("updateQuality never decreases 'Sulfuras, Hand of Ragnaros's sellIn", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 50, 50) ]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(50);
  });

  it("updateQuality increases Backstage pass quality as sellIn approaches", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(11);
  });

  it("updateQuality increases Backstage pass quality by 2 when sellIn is < 10", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 9, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(12);
  });

  it("updateQuality increases Backstage pass quality by 3 when sellIn is < 5", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 4, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(13);
  }); 

  it("updateQuality reduces Backstage pass quality to 0 when sellIn passes", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10) ]);
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  }); 

  it("updateQuality reduces conjured items' quality twice as fast as normal items", function() {
    const gildedRose = new Shop([ new Item("Conjured item", 10, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(8);
  });

  it("updateQuality reduces conjured items' quality by 4 once SellIn passes", function() {
    const gildedRose = new Shop([ new Item("Conjured item", 0, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(6);
  });

  it("updateQuality keeps conjured items' quality >= 0", function() {
    const gildedRose = new Shop([ new Item("Conjured item", 0, 1) ]);
    console.log(gildedRose.items[0])
    const items = gildedRose.updateQuality();
    console.log(gildedRose.items[0])
    expect(items[0].quality).toEqual(0);
  });

});
