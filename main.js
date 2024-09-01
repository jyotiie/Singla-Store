import './style.css';
import products from './api/products.json';
import { showProductContainer } from './homeProductCards';

//call all the products
showProductContainer(products);

