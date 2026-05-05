//3- Create a PizzaBuilder , The definition of pizza is hidden from the customers.

// Builder

class Pizza {
  constructor() {
    this.cheese = "";
    this.peporoni = "";
    this.katchap = "";
    this.chicken = "";
    this.ranch = "";
  }
}

class PizzaBuilder {
  constructor() {
    this.pizza = new Pizza();
  }
  addCheese(cheese) {
    this.pizza.cheese = cheese;
    return this; // will return the builder
  }
  addPeporoni(peporoni) {
    this.pizza.peporoni = peporoni;
    return this; // will return the builder
  }
  addKatchap(katchap) {
    this.pizza.katchap = katchap;
    return this; // will return the builder
  }
  addChicken(chicken) {
    this.pizza.chicken = chicken;
    return this; // will return the builder
  }
  addRanch(ranch) {
    this.pizza.ranch = ranch;
    return this; // will return the builder
  }
  build() {
    return this.pizza; // this to build the pizza 
  }
}

const pizza1 = new PizzaBuilder()
  .addCheese("modzarella")
  .addRanch("ranch")
  .addChicken("chicken")
  .addKatchap("katchap")
  .build();
console.log(pizza1.cheese);
