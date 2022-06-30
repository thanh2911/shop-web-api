import React, { useState } from 'react' ;
import { Link, useLocation, useParams } from 'react-router-dom';
import './pagination.scss'

const Pagination = props => {
    const {id} = useParams() ;
    // console.log(typeof id);
    const type = props.type ;

    const total = props.totalProduct ;
    const limit = props.limitPage;
    const paginate = props.paginate ;

    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(total / limit); i++) {
        pageNumber.push(i);
      }

    // console.log(total , limit , pageNumber) ;

    const handlePanagi = (number) => {
        paginate(number)
    }

  return (
    <div className='pagination'>
        <ul className='pagination-center'>    
            {
                pageNumber.map((number , index) => (
                    <li key={index} onClick={() => handlePanagi(number)}
                    className={`${ number === Number(id) ? 'active' : ''}`}
                    >
                        <Link to={`${`/product/${type}/${number}`  }`}>
                            <span>{number}</span>
                        </Link>
                       
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Pagination