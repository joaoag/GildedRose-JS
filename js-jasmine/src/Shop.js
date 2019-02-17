class Shop {
    constructor(items=[],sort = new Sort, sellin = new SellIn){
        this.items = items;
        this.sort = sort;
        this.sellin = sellin
    }

    updateQuality() {
        for (var i = 0; i < this.items.length; i ++) {
            this.sellin.reduce(this.items[i]);
            this.sort.reduceQuality(this.items[i]);
        }
        return this.items;
    }

}
