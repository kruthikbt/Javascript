// Crete an array of items of 5 items of price and  add the 10% discount and print teh final amount of theitem

let items =[200,300,400,500];
for(let i=0;i< items.length;i++){
    let offer = items[i]/10;
    items[i] -= offer;
}
console.log(items);