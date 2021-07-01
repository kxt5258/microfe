import { mount as productMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartShow';

productMount(document.querySelector('#div-products'));
cartMount(document.querySelector('#div-carts'));
