import React,{useEffect} from 'react';
import { useDispatch , useSelector} from 'react-redux';
import ProductComponent from './productComponent';
import axios from 'axios';
import {setProducts} from '../redux/actions/productActions';


const ProductList = ()=>{
    const products = useSelector(state=>state.allProducts.products);
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchProducts = async()=>{
            const {data} = await axios
              .get('https://fakestoreapi.com/products')
              .catch((err)=>{
                 console.log("Error", err);
              }); 
    
              console.log(data);
              dispatch(setProducts(data));
            // const dispatch = useDispatch();
            // dispatch(setProducts(data));
            //return data
        }  
        fetchProducts();
        
    },[dispatch]);
   
   console.log(products);
    return (
        <div className='ui grid container'>
            <ProductComponent/>
        </div>
    );
};

export default ProductList;