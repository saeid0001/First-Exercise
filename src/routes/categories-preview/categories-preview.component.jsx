import { useContext , Fragment } from 'react' ;
import './categories-preview.style.scss'

import { CategoryContext } from '../../context/category.context' ;

// import ProductCard from '../../components/product-card/product-card.component';
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {

  const { category } = useContext(CategoryContext)
  

  return (
    <Fragment>
      {Object.keys(category).map((title)=>(
          <div className="products-container" key={title}> 
            <CategoryPreview title={title} category={category}/>
          </div>
      ))}
    </Fragment>
  )
}

export default CategoriesPreview ;