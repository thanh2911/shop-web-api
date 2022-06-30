import React from 'react' ;
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from '../button/Button';
import { FiShoppingCart } from 'react-icons/fi'
import './product-card.scss'

const ProductCard = props => {

    const link = `/details/${props.id}` ;

    const priceSale = props.price + props.price * 20 / 100 ;

  return (
    <div className={`product-card col ${props.pc} ${props.tl} ${props.mb}`}>
        <Link to={link}>
            <img src={props.images} alt="" />

            <span className="product-card__title">
                {props.title}
            </span>

            <span className="product-card__price">
                <b>{props.price}</b> 
                <del>{priceSale.toFixed(0)}</del>
            </span>

            <Button
                animation= {true}
                icon = {<FiShoppingCart />}
                size = 'sm'
            >
                View more
            </Button>
        </Link>
    </div>
  )
}

ProductCard.propTypes = {
    images: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    pc: PropTypes.string.isRequired,
    tl: PropTypes.string.isRequired,
    mb: PropTypes.string.isRequired,
}


export default ProductCard