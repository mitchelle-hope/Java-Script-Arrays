class Mkulima{
constructor(){
this.farms = [];
this.groceryVendors = [];
this.productaq = [];
this.addFarm = (farmId, farmName, farmer, phone, address) => {
this.farms.push({farmId,farmName,farmer,phone,address})
}
this.removeFarm = (farmId) => {
let specific = this.farms.find(item => item.farmId ===farmId);
let farmIndex = this.farms.indexOf(specific);
this.farms.splice(farmIndex, 1);
}
this.updateFarm = function(farmId,newFarmId,newFarmName,newFarmersName,newPhone,newAddress){
let specificFarm = this.farms.find(item => item.farmId ===farmId)
specificFarm.farmId =newFarmId;
specificFarm.farmName =newFarmName;
specificFarm.farmer =newFarmersName;
specificFarm.phone =newPhone;
specificFarm.address =newAddress;
}
this.getFarm = (Id)=>{
console.log(this.farms.find(object=>object.farmId===Id))
}
this.addProduct = (productId, productName, price) => {
this.product.push({productId,productName,price})
}
this.removeProduct = (productId) => {
let specific = this.product.find(item => item.productId ===productId);
let productIndex = this.product.indexOf(specific);
this.product.splice(productIndex, 1);
}
this.updateProduct = function(productId,newProductId,newProductName,newPrice){
let specificProduct = this.product.find(item => item.productId ===productId)
specificProduct.productId =newProductId;
specificProduct.productName = newProductName;
specificProduct.price = newPrice;
}
this.getProduct = (Id)=>{
console.log(this.product.find(object=>object.productId===Id))
}
this.printProducts = ()=>{
console.log(this.product)
}
this.calculateOrderCost = (productId,quantity)=>{
let specificProduct = this.product.find(object=>object.productId===productId);
console.log(`${quantity} ${specificProduct.productName} for Kshs ${quantity*specificProduct.price}`);
}
}
}
let farm1 = new Mkulima();
farm1.addFarm("6349h","Misho","Mercy","+254 768 277 620", "616-Korongo road");
farm1.addFarm("5667b","Mollen","Wanjiru","+254 723 433 532", "456-Orthodox");
farm1.addFarm("3545t","Joy","Wangari","+254 775 150 672", "976-Nyamira")
console.log(farm1)
