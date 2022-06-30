import React , {useState , useEffect, useContext} from 'react';

import Slider from '../../components/slider/Slider'
import ProductCard from '../../components/product-card/ProductCard';
import { GlobalState } from '../../GlobalState';
import Loading from '../../components/loading/Loading';

import './home.scss'

const Home = () => {

  const {state} = useContext(GlobalState);
  // console.log(state);

  const [product] = state.productApi.product ;
  const [loading] = state.productApi.loading ;

  if(!loading) return <div><Loading /></div>

  return (
    <div className="home">

      <Slider data = {product}/>

      <div className="home-content">
        <div className='section-title '>top thịnh hành</div>

        <div className="grid">
          <div className="row">
          {
            product.slice(10,18).map((item , index) => (
              <ProductCard key= {index}
                id = {item.id}
                images = {item.images}
                title = {item.title}
                price = {item.price}
                pc = {`l-3`}
                tl = {`m-6`}
                mb = {`c-12`}
              />
            ))
          }
          </div>
        </div>


        <div className='section-title '> phổ biến</div>

        <div className="grid">
          <div className="row">
          {
            product.slice(18,30).map((item , index) => (
              <ProductCard key= {index}
                id = {item.id}
                images = {item.images}
                title = {item.title}
                price = {item.price}
                pc = {`l-3`}
                tl = {`m-6`}
                mb = {`c-12`}
              />
            ))
          }
          </div>
        </div>
      </div>

      

    </div>
  )
}

export default Home   