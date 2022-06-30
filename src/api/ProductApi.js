import React, { useEffect, useState } from 'react';
import axios from 'axios' ;

const ProductApi = () => {

    const [product , setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const getProduct = async () => {
            const res = await axios.get('https://api.escuelajs.co/api/v1/products');

           setProduct(res.data) 
           setLoading(true)
        }
        getProduct();
    },[])

    

  return  {
    product : [product , setProduct],
    loading :[loading, setLoading]
  }
    
  
}

export default ProductApi