describe("Gilded Rose: Shop", function() {

    it("should initialise with an empty array called 'items'", function() {
        const gildedRose = new Shop();
        expect(gildedRose.items).toEqual([]);
    });

});