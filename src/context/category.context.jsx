import { createContext , useState , useEffect } from 'react' ;
import { getCategoriesAndDocuments } from '../utils/firebase/firebase-component';

// import SHOP_DATA from '../shope-data.js' ;

export const CategoryContext = createContext({}) 

export const CategoryProvider = ({children})=>{

    const [category , setCategory] = useState({}) ;
    
    useEffect(() => {
        const Runners = async () =>{
            const categoryMap = await getCategoriesAndDocuments();
            setCategory(categoryMap)
        };
        Runners()
      }, []);
    
    const value = {category} ; 

    return(
        <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>
    )
}