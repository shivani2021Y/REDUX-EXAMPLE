import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
    const products = useSelector(state => state.allProducts.products);
    console.log(products);
    //console.log(products.allProducts.products);
    //const {id, title}=products[0];
    //console.log(id, title);

    const myProducts = products.map((product) => {
        return <div className='four column wide' key={product.id}>
            <Link to={`/product/${product.id}`}>
            <div className='ui link cards'>
                <div className='card'>
                    <div className='image'>
                        <img src={product.image} alt={product.title}></img>
                        </div>
                        <div className='content'>
                            <div className='header'>{product.title}</div>
                            <div className='meta price'>$ {product.price}</div>
                            <div className='meta'>$ {product.category}</div>
                        
                    </div>
                </div>
            </div>
            </Link>
        </div>

    })

    console.log(myProducts)
    return<>
    {products.length ===0 ? (<p>loading</p>) : myProducts}

    </> 
    
};

export default ProductComponent;