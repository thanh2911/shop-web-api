import React , {useState , useEffect , useContext} from 'react' ;
import { useParams } from 'react-router-dom' ;
import DetailView from '../../components/detail-view/DetailView';
import { GlobalState } from '../../GlobalState';
import ProductCard from '../../components/product-card/ProductCard';
import Loading from '../../components/loading/Loading';

import './details.scss'

const Details = () => {

  const {id} = useParams();

  const {state} = useContext(GlobalState);

  const [product] = state.productApi.product ;
  const [loading] = state.productApi.loading ;

  const [detail,setDetail] = useState([]) ;
  const [category,setCategory] = useState('');
  const [detailCategory , setDetailCategory] = useState([]);

  useEffect(() => {
    const getDetail = async () => {
      try {
        const result = await product.find(item => item.id === Number(id) ) ; 
        setDetail(result);
        setCategory(result.category.name);
        window.scrollTo(0,0);
      } catch (error) {
        // console.log(error);
      }
    }
    getDetail();

  },[id,product])

  useEffect(() => {
    const getDe_Ca = async () => {
      const res = await product.filter(item => item.category.name === category);
      setDetailCategory(res) ;
    }
    getDe_Ca();
  },[category, product , id])

  if(Array.isArray(detail) === true) {
    return null
  } 
  //! khi chay lan dau if detail array => return null 

  if(detail === undefined) return null
  // ! khi ta f5 web if detail === undefined => return null

  // console.log(detailCategory);
  // console.log(detail);
  // if(detail.length ===0) return null

  if(!loading) return <div><Loading /></div>
  return (
    <div className="detail">
        <DetailView product = {detail} />

        <div className='section-title '>Sản phẩm cùng loại</div>

          <div className="grid">
            <div className="row">
            {
              detailCategory.slice(0,8).map((item , index) => (
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
  )
}

export default Details