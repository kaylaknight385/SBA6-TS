//da big one...
//importing our tools we jus maaade
import { calculateDiscount } from "../utils/discountCalculator";
import { calculateTax } from "../utils/taxCalculator";
//the product class thats exported from the e-commerce system
export class Product {
    //constructor are just a special function that runs when create a NEW product, not one already in the database
    constructor(id, title, description, category, price, discountPercentage, rating, stock, brand) {
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
    displayDetails() {
        console.log("=".repeat(50)); //makes it look pretty
        console.log(`Product: ${this.title}`);
        console.log(`Brand: ${this.brand}`);
        console.log(`Price: ${this.price}`);
        console.log(`Category: ${this.category}`);
        console.log(`Description: ${this.description}`);
        console.log(`Discount: ${this.discountPercentage}%`);
        console.log(`Rating : ${this.rating}/5`);
        console.log(`Stock: ${this.stock} units`);
        console.log(`Final Price (wit/a discoooount): ${this.getPriceWithDiscount().toFixed(2)}`);
        console.log("=".repeat(50));
    }
    //this function just return total price with discount applied. 
    getPriceWithDiscount() {
        const discountAmount = calculateDiscount(this.price, this.discountPercentage);
        return this.price - discountAmount;
    }
    //calculates and return the tax amount for each produuuuct
    getTax() {
        return calculateTax(this.price, this.category);
    }
    //bringing it hooooome - this is final price with the discount AND taxes applied
    getTotalPrice() {
        const priceWithDiscount = this.getPriceWithDiscount();
        const tax = calculateTax(priceWithDiscount, this.category);
        return priceWithDiscount + tax;
    }
}
