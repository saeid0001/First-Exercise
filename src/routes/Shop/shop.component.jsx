import { Routes , Route } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { setCategory } from "../../store/category/category-action";
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase-component';

const Shop = () => {  

  const dispatch = useDispatch() ;

  useEffect(() => {
      const Runners = async () =>{
          const categoryMap = await getCategoriesAndDocuments();
          dispatch(setCategory(categoryMap))
      };
      Runners()
    }, []);

  return (
    <>
      <Routes>
        <Route index element={<CategoriesPreview/>}/>
        <Route path=':categoryCM' element={<Category/>}/>
      </Routes>
    </>
  )
}

export default Shop ;