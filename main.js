let whatever = new Clothes("Cardigan", "Jackets", "ourr3gu", "ornvr", "obnfuf2", "ornorr", "ojrnon")
let Chief = new User("wdhid", "isnwvww", "pinrv3r");


Chief.addCloset();
Chief.closet.addClothing(whatever);
Chief.closet.addNewClothing("Cardigan", "Jackets", "rgwr", "egrt4t", null, null);
Chief.closet.Storage[0].attributes();

console.log(Chief.closet.Storage[0].lightness);
console.log(Chief.closet.Storage[1].lightness);

Chief.closet.showAll();