import { useState , useEffect } from 'react';
import {useParams} from 'react-router-dom' ;
import './category.style.scss' ;

// import { CategoryContext } from '../../context/category.context';
import ProductCard from '../../components/product-card/product-card.component';
import { selectContex } from '../../store/category/category-selector';
import { useSelector } from 'react-redux';

const Category = () => {
    const { categoryCM } = useParams() ; // هر اسمی جلوی این : گذاشتیم اینجا ازش میگیریم
    const category = useSelector(selectContex)
    // const { category } = useContext(CategoryContext) ;
    const [products , setProducts] = useState(category[categoryCM]) ;
    
    useEffect(()=>{
        setProducts(category[categoryCM]);
    } , [category , categoryCM])
   
  return (
    <>
      <h2>{products && categoryCM.toUpperCase()}</h2>
      <div className='category-item'>
          {products && products.map(product => <ProductCard key={product.id} products={product} />)}
      </div>
    </>
  )
}

export default Category