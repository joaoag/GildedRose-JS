class Item {
    constructor(name, sellIn, quality){
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

class Shop {
    constructor(items=[], normal = new NormalUpdate, brie = new BrieUpdate){
        this.items = items;
        this.normal = normal;
        this.brie = brie;

    }

    updateQuality() {
        for (var i = 0; i < this.items.length; i ++) {
            this.reduceSellIn(this.items[i]);
            this.reduceQuality(this.items[i]);
        }
        return this.items;
    }

    reduceQuality(item) {
        if (item.name == "Aged Brie") {
            this.brie.calculateQuality(item);
        } else if (item.name == "Sulfuras, Hand of Ragnaros") {
            this.calculateSulfurasQuality(item);
        } else if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
            this.calculatePassesQuality(item);
        } else if (item.name == "Conjured item") {
            this.calculateConjuredQuality(item);
        } else {
            this.normal.calculateQuality(item);
        }
    }

    reduceSellIn(item) {
        item.name != "Sulfuras, Hand of Ragnaros" ? item.sellIn -= 1 : this.sulfurasSellIn(item);
    }

    sulfurasSellIn(item) {
        item.sellIn;
    }



    

    calculateSulfurasQuality(item){
        item.quality;
    }

    calculatePassesQuality(item){
        if (item.sellIn < 0) {
            item.quality = 0;
        } else if (item.sellIn < 10 && item.sellIn > 5) {
            item.quality += 2;
        } else if (item.sellIn >= 10) {
            item.quality += 1;
        } else {
            item.quality += 3;
        }
    }

    calculateConjuredQuality(item){
        if (item.quality >= 50) {
            item.quality = 50;
        } else if (item.sellIn <= 0 && item.quality <= 0) {
            item.quality = 0;
        } else if (item.sellIn <= 0 && item.quality <= 4) {
            item.quality = 0 ;
        } else if (item.sellIn <= 0 && item.quality > 4) {
            item.quality -= 4 ;
        } else {
            item.quality -= 2;
        }
    }
}
