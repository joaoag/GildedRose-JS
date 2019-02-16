describe("Feature Test: Shop & Item", function() {

    describe("Normal items passed through #updateQuality have their:", function(){

        it("quality initially reduced by 1", function() {
            const gildedRose = new Shop([ 
                new Item("Bread", 10, 5)
            ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(4);
        });

        it("sellIn reduced by 1", function() {
            const gildedRose = new Shop([ 
                new Item("Bread", 2, 2) 
            ]);
            const items = gildedRose.updateQuality();
            expect(items[0].sellIn).toEqual(1);
        });

        it("quality reduced by 2 if SellIn <= 0", function() {
            const gildedRose = new Shop([ 
                new Item("rottenBread", 0, 2)
            ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(0);
        }); 

        it("quality stopped from being < 0", function() {
            const gildedRose = new Shop([ 
                new Item("rottenBread", 0, 2)
            ]);
            gildedRose.updateQuality();
            gildedRose.updateQuality();
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(0);
        });
});
    describe("Aged Brie passed through #updateQuality has:", function(){
        it("its quality increased over time", function() {
            const gildedRose = new Shop([
                new Item("Aged Brie", 0, 1)
            ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(3);
        });
        it("its quality limited to 50", function() {
            const gildedRose = new Shop([
                new Item("Aged Brie", -30, 49)
            ]);
            gildedRose.updateQuality();
            gildedRose.updateQuality();
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(50);
        });
    });
    
describe("Sulfuras passed through #updateQuality has:", function(){
    it("a quality of 80", function() {
        const gildedRose = new Shop([
        new Item("Sulfuras, Hand of Ragnaros", 0, 80)
        ]);
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(80);
    });
  
    it("its quality fixed", function() {
        const gildedRose = new Shop([
        new Item("Sulfuras, Hand of Ragnaros", 0, 80)
        ]);
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(80);
    });

    it("its sellIn fixed", function() {
        const gildedRose = new Shop([
        new Item("Sulfuras, Hand of Ragnaros", 0, 80)
        ]);
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(0);
    });
});
describe("Backstage Passes passed through #updateQuality have their:", function(){
    it("quality increased as sellIn approaches 0", function() {
        const gildedRose = new Shop([
        new Item("Backstage passes to a TAFKAL80ETC concert", 15, 10)        
        ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(11);
    });

    it("quality increased by 2 when sellIn is < 10", function() {
        const gildedRose = new Shop([
        new Item("Backstage passes to a TAFKAL80ETC concert", 9, 10)        
        ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(12);
    });

    it("quality increased by 3 when sellIn is < 5", function() {
        const gildedRose = new Shop([
        new Item("Backstage passes to a TAFKAL80ETC concert", 4, 10)        
        ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(13);
    }); 

    it("quality reduced to 0 when sellIn < 0", function() {
        const gildedRose = new Shop([
        new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10)        
        ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0);
    }); 
});
    describe("Conjured items passed through #updateQuality have their:", function() {
        it("quality reduced twice as fast as normal items", function() {
            const gildedRose = new Shop([
            new Item("Conjured item", 10, 10)
            ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(8);
        });

        it("quality reduced by 4 once SellIn passes", function() {
            const gildedRose = new Shop([
            new Item("Conjured item", 0, 10)
            ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(6);
        });

        it("quality kept >= 0", function() {
            const gildedRose = new Shop([
            new Item("Conjured item", 0, 1)
            ]);
            gildedRose.updateQuality();
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(0);
        });
    });
});


