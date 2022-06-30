import React , {useState , useContext, useEffect , memo} from 'react' ;
import { Link } from 'react-router-dom';
import { GlobalState } from '../../GlobalState';
import Pagination from '../../components/pagination/Pagination';
import ProductCard from '../../components/product-card/ProductCard';
import Loading from '../../components/loading/Loading';
import './product.scss' ;

const Product = () => {

  const {state} = useContext(GlobalState) ;
  // console.log(state);

  const [category] = state.categoryApi.category ;
  const [product] = state.productApi.product ;
  const [loading] = state.productApi.loading ;

  const [currentPage, setCurrentPage] = useState(1); //* page hien tai
  const [limitPage] = useState(9); //* gioi han so luong product trong 1 page
  const [type,setType] = useState(); //* type category hien tai

  const [productList ,setProductList] = useState(product); //* product khi lay category
  const [currProducts ,setCurrProducts] = useState([]); //* product dc in ra


  
  const handlecategary = (type) => {
      const result = product.filter((proData) => {
        return proData.category.name === type
      })
      setProductList(result);
      setType(type);
    }
  
    const handlAll = () => {
      setProductList(product);
      setType('all')
    }
  
  //* Lay page hien tai
  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };



  useEffect(() => {
    const getProduct = async () => {
      const indexLast = currentPage * limitPage;
      const indexFirst = indexLast - limitPage;
      const curr= await productList.slice(indexFirst, indexLast);

      // * Lay product hien tai
      setCurrProducts(curr);
    }
    getProduct();
  },[productList ,currentPage])


  // console.log(currentPage);
  // console.log(category);
  // console.log(currProducts);
  if(!loading) return <div><Loading /></div>

  return (
    <div className="product">
        <div className="category">
          <ul className="category-list">
          {
              category.map((item) => (
                <li className="category-item" key={item.id}
                onClick = {() => handlecategary(item.name)}
                >
                  <Link to={`/product/${item.name}/${currentPage}`}>
                    <span className='line-hover'>{item.name}</span>
                  </Link>
                    
               </li>
              ))
            }
          </ul>
          <div className="category-all">
            <Link to={`/product/all/${currentPage}`} onClick={handlAll }> 
               <span className='line-hover'>All </span>
            </Link>
          </div>

        </div>

        <div className="product-list">

          <div className="grid">
            <div className="row">
            {
              currProducts.map((item , index) => (
                <ProductCard key= {index}
                  id = {item.id}
                  images = {item.images}
                  title = {item.title}
                  price = {item.price}
                  pc = {`l-4`}
                  tl = {`m-6`}
                  mb = {`c-12`}
                />
              )) 
            }
            </div>
          </div>

            <Pagination 
             paginate = {paginate}
             totalProduct = {productList.length}
             limitPage = {limitPage}
             type = {type}
            />
        </div>
    </div>
  )
}

export default memo(Product)