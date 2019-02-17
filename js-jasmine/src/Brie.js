class Brie {
    
    calculateQuality(item){
        item.quality >= 50 ? item.quality = 50 : item.quality += 2;
    }
}