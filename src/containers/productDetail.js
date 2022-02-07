import React, {useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct ,removeSelectedProduct} from '../redux/actions/productActions';

const ProductDetail = ()=>{
    const { productId } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state)=>state.product);
    const {id, title, price,category,image} = product;
    console.log("inside ProductDetail, id is" ,productId, id, title, price,category,image);
    

    useEffect(()=>{
        const fetchProductDetail = async ()=>{
            const {data} = await axios
                           .get(`https://fakestoreapi.com/products/${productId}`)
                           .catch((err)=>{
                            console.log('Error is',err);
                           });
            console.log(data);
            dispatch(selectedProduct(data));
        }
        if(productId!=="" && productId)fetchProductDetail();


        return ()=>{
            dispatch(removeSelectedProduct())
        }
    },[productId, dispatch])
    return <div>
        {Object.keys(product).length===0 ? (<p>Loading....</p>) : (<div className='four column wide' key={id}>
            <div className='ui link cards'>
                <div className='card'>
                    <div className='image'>
                        <img src={product.image} alt={title}></img>
                        </div>
                        <div className='content'>
                            <div className='header'>{title}</div>
                            <div className='meta price'>$ {price}</div>
                            <div className='meta'>{category}</div>
                    </div>
                </div>
            </div>
        </div>
    ) }
    </div>
};

export default ProductDetail;