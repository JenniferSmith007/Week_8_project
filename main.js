class Inventory {
  constructor(cost){
    this.products = [];
    this.cost = cost;
    
  }
  have(product = null){
    const name = product;
    const cost = this.cost;
    const quantity = this.quantity
    if (product !== null){
      this.products.push({product: product, cost: cost, quantity: quantity});
    }

  }
  
 

}
class PI extends Inventory { 
  constructor(cost, quantity) { 
  super(cost);
    this.quantity = quantity;
  }
}

const markers = new PI();

markers.quantity = 250;

markers.cost = 5.34;

markers.have(`markers`);

markers.products;