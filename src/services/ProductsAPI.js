import { useEffect } from 'react'
import axios from "axios";
import { normalize, schema } from 'normalizr';
import useLocalStorage from "../hooks/useLocalStorage";

const ProductsService = () => {

    const [cachedData] = useLocalStorage('mpharma');

    useEffect(() => {
        const prices = new schema.Entity('prices');

        const product = new schema.Entity('products', { "prices": [prices] });

        const productList = new schema.Entity('productslist', { products: [product] });

        if (!cachedData) {
            console.log('cache not loaded.');
            axios("http://www.mocky.io/v2/5c3e15e63500006e003e9795").then((response) => {
                const normalizedData = normalize(response.data.products, [productList]);
            });
        } else {
            console.log('cache loaded.');
        }

    }, [])

    // return [cachedData]
};

export default ProductsService;