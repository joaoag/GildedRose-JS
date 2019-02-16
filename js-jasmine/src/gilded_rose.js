class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i ++) {
      this.reduceQuality(this.items[i])
      this.reduceSellIn(this.items[i])
    }
    return this.items;
  }

  reduceQuality(item) {
    if (item.name == 'Aged Brie') {
      this.calculateBrieQuality(item)
    } else if (item.name == 'Sulfuras, Hand of Ragnaros') {
      this.calculateSulfurasQuality(item)
    } else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
      this.calculatePassesQuality(item)
    } else if (item.name == 'Conjured item') {
      this.calculateConjuredQuality(item)
    } else {
      this.calculateQuality(item)
    }
  }

  reduceSellIn(item) {
    item.name != 'Sulfuras, Hand of Ragnaros' ? item.sellIn -= 1 : item.sellIn = item.sellIn
  }

  calculateQuality(item){
    if (item.quality >= 50) {
      item.quality = 50;
    } else if (item.sellIn <= 0 && item.quality <= 0) {
      item.quality = 0;
    } else if (item.sellIn <= 0 && item.quality > 0) {
      item.quality -=2 ;
    } else {
      item.quality -= 1;
    }
  }

  calculateBrieQuality(item){
    item.quality >= 50 ? item.quality = 50 : item.quality += 2;
  }

  calculateSulfurasQuality(item){
    item.quality = item.quality;
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
    item.quality -= 2
  }





  // updateQuality() {
  //   for (var i = 0; i < this.items.length; i++) {
  //     if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
  //       if (this.items[i].quality > 0) {
  //         if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //           this.items[i].quality = this.items[i].quality - 1;
  //         }
  //       }
  //     } else {
  //       if (this.items[i].quality < 50) {
  //         this.items[i].quality = this.items[i].quality + 1;
  //         if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
  //           if (this.items[i].sellIn < 11) {
  //             if (this.items[i].quality < 50) {
  //               this.items[i].quality = this.items[i].quality + 1;
  //             }
  //           }
  //           if (this.items[i].sellIn < 6) {
  //             if (this.items[i].quality < 50) {
  //               this.items[i].quality = this.items[i].quality + 1;
  //             }
  //           }
  //         }
  //       }
  //     }
  //     if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //       this.items[i].sellIn = this.items[i].sellIn - 1;
  //     }
  //     if (this.items[i].sellIn < 0) {
  //       if (this.items[i].name != 'Aged Brie') {
  //         if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
  //           if (this.items[i].quality > 0) {
  //             if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //               this.items[i].quality = this.items[i].quality - 1;
  //             }
  //           }
  //         } else {
  //           this.items[i].quality = this.items[i].quality - this.items[i].quality;
  //         }
  //       } else {
  //         if (this.items[i].quality < 50) {
  //           this.items[i].quality = this.items[i].quality + 1;
  //         }
  //       }
  //     }
  //   }

  //   return this.items;
  // }
}
