//da big one...
//importing our tools we jus maaade

import { calculateDiscount } from "../utils/discountCalculator"
import { calculateTax } from "../utils/taxCalculator"


//the product interface thats exported from the e-commerce system
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;

//constructor are just a special function that runs when create a NEW product, not one already in the database
  constructor(
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercetange: number,
    rating: number,
    stock: number,
    brand: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.category = category;
    this.price = price;
    this.discountPercentage = discountPercentage;
    this.rating = rating;
    this.stock = stock;
    this.brand = brand;
  } //this.id = id jus means that the id you gave me and save it with THIS NEW product's id. 

  //console log it out- this block just displays the product details inna formatted waaay
displayDetails(): void { //remember void just prints. She dont do nothing, returns nothing, jus print.
  console.log("=".repeat(50)); //makes it look pretty
  console.log(`Product: ${this.title}`);
  console.log(`Brand: ${this.brand}`);
  console.log(`Price: ${this.price}`);
  console.log(`Category: ${this.category}`);
  console.log(`Description: ${this.description}`);
  console.log(`Discount: ${this.discountPercentage}%`);
  console.log(`Rating : ${this.rating}/5`);
  console.log(`Stock: ${this.stock} units`);
  console.log(`Final Price (wit/a discoooount): $${this.getPriceWithDiscount().toFixed(2)}`);
  console.log("=".repeat(50));
}

//this function just return total price with discount applied. 
getPriceWithDiscount(): number {
  const discountAmount = calculateDiscount(this.price, this.discountPercentage); 
  return this.price - discountAmount;
}

}
