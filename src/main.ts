import { Product } from '../models/Product';
import { ApiService } from '../services/apiService';
import { calculateDiscount } from '../utils/discountCalculator';
import { calculateTax } from '../utils/taxCalculator';
import { handleError } from '../utils/errorHandler';

console.log('Application started');
