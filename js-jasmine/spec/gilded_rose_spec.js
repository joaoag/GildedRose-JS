
describe("Gilded Rose", function() {

    describe("normal items passed through #updateQuality have their:", function(){

        it("quality initially reduced by 1", function() {
            const mockItemBread = { name: "Bread", sellIn: 15, quality: 5 }
            const gildedRose = new Shop([ 
                mockItemBread
            ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(4);
        });

        it("sellIn reduced by 1", function() {
            const mockItemBread = { name: "Bread", sellIn: 15, quality: 5 }
            const gildedRose = new Shop([ 
                mockItemBread 
            ]);
            const items = gildedRose.updateQuality();
            expect(items[0].sellIn).toEqual(14);
        });

        it("quality reduced by 2 if SellIn <= 0", function() {
            const mockItemRottenBread = { name: "Rotten Bread", sellIn: 0, quality: 2 }
            const gildedRose = new Shop([ 
                mockItemRottenBread
            ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(0);
        }); 

        it("quality stopped from being < 0", function() {
            const mockItemRottenBread = { name: "Rotten Bread", sellIn: 0, quality: 2 }
            const gildedRose = new Shop([ 
                mockItemRottenBread
            ]);
            gildedRose.updateQuality();
            gildedRose.updateQuality();
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(0);
        });
});
    describe("Aged Brie passed through #updateQuality has:", function(){
        it("its quality increased over time", function() {
            const mockItemEarlyAgedBrie = { name: "Aged Brie", sellIn: 0, quality: 1 }
            const gildedRose = new Shop([
                mockItemEarlyAgedBrie
            ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(3);
        });
        it("its quality limited to 50", function() {
            const mockItemLateAgedBrie = { name: "Aged Brie", sellIn: -20, quality: 49 }
            const gildedRose = new Shop([
                mockItemLateAgedBrie
            ]);
            gildedRose.updateQuality();
            gildedRose.updateQuality();
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(50);
        });
    });
    
describe("Sulfuras passed through #updateQuality has:", function(){
    it("a quality of 80", function() {
        const mockItemSulfuras = { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80 }
        const gildedRose = new Shop([
        mockItemSulfuras
        ]);
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(80);
    });
  
    it("its quality fixed", function() {
        const mockItemSulfuras = { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80 }
        const gildedRose = new Shop([
        mockItemSulfuras
        ]);
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(80);
    });

    it("its sellIn fixed", function() {
        const mockItemSulfuras = { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80 }
        const gildedRose = new Shop([
        mockItemSulfuras
        ]);
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(0);
    });
});
describe("Backstage Passes passed through #updateQuality have their:", function(){
    it("quality increased as sellIn approaches 0", function() {
        const mockItemPass = { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 15, quality: 10 }
        const gildedRose = new Shop([
        mockItemPass 
        ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(11);
    });

    it("quality increased by 2 when sellIn is < 10", function() {
        const mockItemPass = { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 9, quality: 10 }
        const gildedRose = new Shop([
        mockItemPass 
        ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(12);
    });

    it("quality increased by 3 when sellIn is < 5", function() {
        const mockItemPass = { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 4, quality: 10 }
        const gildedRose = new Shop([
        mockItemPass 
        ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(13);
    }); 

    it("quality reduced to 0 when sellIn < 0", function() {
        const mockItemPass = { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 0, quality: 10 }
        const gildedRose = new Shop([
        mockItemPass 
        ]);
        console.log(gildedRose.items[0])
        const items = gildedRose.updateQuality();
        console.log(gildedRose.items[0])
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
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(0);
        });
    });
});
