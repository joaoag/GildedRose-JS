class Item {
    constructor(name, sellIn, quality){
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

class Shop {
    constructor(items=[], normal = new NormalUpdate, brie = new BrieUpdate, sulfuras = new SulfurasUpdate, pass = new PassesUpdate, conjured = new ConjuredUpdate){
        this.items = items;
        this.normal = normal;
        this.brie = brie;
        this.sulfuras = sulfuras;
        this.pass = pass;
        this.conjured = conjured;
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
            this.sulfuras.calculateQuality(item);
        } else if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
            this.pass.calculateQuality(item);
        } else if (item.name == "Conjured item") {
            this.conjured.calculateQuality(item);
        } else {
            this.normal.calculateQuality(item);
        }
    }

    reduceSellIn(item) {
        item.name != "Sulfuras, Hand of Ragnaros" ? item.sellIn -= 1 : this.sulfuras.SellIn(item);
    }


}
