class Sort {

    constructor(normal = new NormalUpdate, brie = new BrieUpdate, sulfuras = new SulfurasUpdate, pass = new PassesUpdate, conjured = new ConjuredUpdate){
        this.normal = normal;
        this.brie = brie;
        this.sulfuras = sulfuras;
        this.pass = pass;
        this.conjured = conjured;
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
    
}