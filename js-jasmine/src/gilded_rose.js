class Item {
    constructor(name, sellIn, quality){
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

class Shop {
    constructor(items=[],sort = new Sort){
        this.items = items;
        this.sort = sort;
    }

    updateQuality() {
        for (var i = 0; i < this.items.length; i ++) {
            this.reduceSellIn(this.items[i]);
            this.sort.reduceQuality(this.items[i]);
        }
        return this.items;
    }

    reduceSellIn(item) {
        if (item.name != "Sulfuras, Hand of Ragnaros") item.sellIn -= 1
    }


}
