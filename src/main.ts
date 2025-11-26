import { Product } from '../models/Product.js';
import { fetchProductById, fetchProducts } from '../services/apiService.js';
import { calculateDiscount } from '../utils/discountCalculator.js';
import { calculateTax } from '../utils/taxCalculator.js';
import { handleError } from '../utils/errorHandler.js';

console.log('Application started');
