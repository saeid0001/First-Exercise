import React from 'react' ;
import { Link } from 'react-router-dom'
import ProductCard from '../product-card/product-card.component' ;
import './category-preview.style.scss'

const CategoryPreview = ({title , category}) => {
  return (
    <div className='category-preview-container'>
      <h2>
        <Link className='title' to={title}>{title.toUpperCase()}</Link>
      </h2>
      <div className='preview'>
        { 
          category[title]
          .filter((_ , index) => index < 4)
          .map(item =>(
            <ProductCard key={item.id} products={item}/>
          ))
        }
      </div>
    </div>
  )
}

export default CategoryPreview