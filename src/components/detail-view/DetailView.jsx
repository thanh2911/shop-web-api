import React , { useState , useEffect , useContext } from 'react';
import Button from '../button/Button';
import { FiShoppingCart } from 'react-icons/fi';
import { useUserAuth } from '../../GlobalState';
// import Swal from 'sweetalert2'
import './detail-view.scss'

const DetailView = props => {

    const product = props.product ;
    // console.log(product);

    const [imgMain , setImgMain ] = useState('');
    const { user } = useUserAuth();

    const priceSale = product.price + product.price * 20 / 100 ;

    // if(product.length === 0) return null
   
    const handleTb = () => {
        if(!user) {
            console.log("hahaha");
        }
        else {
            console.log("chua co lam");
        }
    }

  return (
    <div className="detail-view">
        <div className="detail-view__imgs">
            <div className="detail-view__imgs-list">
                <div className="detail-view__imgs-list--item" onClick={() => setImgMain(product.images[0])}>
                    <img src={product.images[0]} alt="" />
                </div>
                <div className="detail-view__imgs-list--item" onClick={() => setImgMain(product.images[1])}>
                    <img src={product.images[1]} alt="" />
                </div>
                <div className="detail-view__imgs-list--item" onClick={() => setImgMain(product.images[2])}>
                    <img src={product.images[2]} alt="" />
                </div>
            </div>

            <div className="detail-view__imgs-main">
                <img src={imgMain === '' ? product.images[0] : imgMain} alt="" />
            </div>


        </div>

        <div className="detail-view__info">
            <div className="detail-view__info-title">
                {product.title}
            </div>

            <div className="detail-view__info-des">
                {product.description}
            </div>

            <div className="detail-view__info-price">
                <b>Price : {product.price} </b> <span>-</span>
                <del>{priceSale.toFixed(0)}</del>
            </div>

            <Button
                animation= {true}
                icon = {<FiShoppingCart />}
                onClick= {handleTb}
            >
                buy now
            </Button>


        </div>


    </div>
  )
}

export default DetailView