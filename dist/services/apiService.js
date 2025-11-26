"use strict";
//API CALLLLING HELLO????
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProductById = fetchProductById;
exports.fetchProducts = fetchProducts;
const errorHandler_1 = require("../utils/errorHandler");
const node_fetch_1 = __importDefault(require("node-fetch"));
const BASE_URL = "https://dummyjson.com";
//storing url in base, makes it earies to change IF api moves
async function fetchProductById(id) {
    //remember async are jus functions that does things that takes time. shes about to go fetch the product by the id
    //the promise<any> returns a promise that will evenntuaaaaally give us data. 
    //man first line is jus I need that id info. i make a promise to get it. wait a lil bit then the data arrives. 
    try {
        const response = await (0, node_fetch_1.default)(`${BASE_URL}/products/${id}`);
        //fetch is built-in javascript that gets data from the interwebs.
        //the await is jus 'wait here until i gets that data before moving into the next line twin'
        if (!response.ok) {
            throw new errorHandler_1.ApiError(`Failed to fetch that thang ${id}. Status: ${response.status}`);
        } //this line says 'if response is not okay then creat and throw my custom error message'
        const data = await response.json();
        return data; //this converts the response it got from waiting to Javascript object. Await- wait for the conversion to finish. Then return data.
    }
    catch (error) {
        if (error instanceof errorHandler_1.ApiError) {
            throw error;
        }
        throw new errorHandler_1.ApiError(`Error fetching that thang: ${error}`);
    }
}
async function fetchProducts(limit = 10) {
    try {
        const response = await (0, node_fetch_1.default)(`${BASE_URL}/products?limit=${limit}`);
        if (!response.ok) {
            throw new errorHandler_1.ApiError(`Failed to fetch products. Status: ${response.status}`);
        }
        const data = await response.json();
        return data.products;
    }
    catch (error) {
        if (error instanceof errorHandler_1.ApiError) {
            throw error;
        }
        throw new errorHandler_1.ApiError(`Error fetching that thang by catergory: ${error}`); //AYE more error handling
    }
}
