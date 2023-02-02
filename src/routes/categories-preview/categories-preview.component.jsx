import { Fragment } from 'react' ;
import './categories-preview.style.scss'


// import ProductCard from '../../components/product-card/product-card.component';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { selectContex } from '../../store/category/category-selector';
import { useSelector } from 'react-redux';

const CategoriesPreview = () => {

  const category = useSelector(selectContex)
  // const { category } = useContext(CategoryContext)
  

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