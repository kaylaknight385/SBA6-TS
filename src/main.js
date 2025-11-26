import { Product } from "./models/Product";
import { fetchProductById, fetchProducts } from "./services/apiService";
import { handleError } from "./utils/errorHandler";

//the main function that run this ayyyyyye. we're waiting cuz shes async 
async function main() {
    console.log("Welcome to the E-Commerce Product Management System!\n"); // the /n just means new line. it adds a blank line.
    try {
        //fetch a single product by ID
        console.log("Fetching product with ID 1...\n");
        const productData = await fetchProductById(1);
        // creating a new product object 
        const product = new Product(productData.id, productData.title, productData.description, productData.category, productData.price, productData.discountPercentage, productData.rating, productData.stock, productData.brand);
        // displays the product details 
        product.displayDetails();
        // Show additional info like the discounted price, tax amount, and discount and taxes applied
        console.log(`\nAdditional Price Info:`);
        console.log(`Discount Amount: $${(product.price - product.getPriceWithDiscount()).toFixed(2)}`);
        console.log(`Tax Amount: $${product.getTax().toFixed(2)}`);
        console.log(`Total Price (with discount & tax): $${product.getTotalPrice().toFixed(2)}`);
        console.log("\n" + "=".repeat(50) + "\n"); //pretty line seperator lol 
        // fetch multiple products
        console.log("Fetching 5 products...\n");
        const productsData = await fetchProducts(5);
        // sexy array function happening here. 
        //.map is an array method thst will take each item, call it data, turn it into a new arrray of product objects.  
        const products = productsData.map((data) => new Product(data.id, data.title, data.description, data.category, data.price, data.discountPercentage, data.rating, data.stock, data.brand));
        // for each product in the array. call it by 'prod' and DISPLAY the product details. 
        products.forEach((prod) => {
            prod.displayDetails();
            console.log("\n");
        });
        // success message AYYYYYYYE
        console.log("Successfully fetched and displayed all products!");
    }
    catch (error) {
        handleError(error);
    } //DONT PLAY. HANDLE THEM ERRORS
}
// Run the main function
main();
