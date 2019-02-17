class Passes {
    
    calculateQuality(item){
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
}