import React, { useEffect, useState } from 'react' ;
import axios from 'axios';

const CategoryApi = () => {

    const [category , setCategory] = useState([]);

    useEffect(() => {
        const getCategory =  async () => {
            const res = await axios.get('https://api.escuelajs.co/api/v1/categories') ;
            setCategory(res.data)
        }

        getCategory();
    },[])

  return {
    category : [category,setCategory]
  }
}

export default CategoryApi