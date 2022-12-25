import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { setProduct } from '../redux/action/ProductAction';

const ProductListing = () => {
    const dispatch = useDispatch();

    const fetchProduct = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => console.log(err))
        dispatch(setProduct(response.data))
    }

    useEffect(() => {
        fetchProduct();
    }, )

    return (
        <div className="ui grid container" style={{marginTop:20}}>
            <ProductComponent />
        </div>
    )
}

export default ProductListing