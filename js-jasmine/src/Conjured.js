class Conjured {
    
    calculateQuality(item){
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