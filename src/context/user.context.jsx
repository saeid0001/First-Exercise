import { createContext , useState , useEffect } from 'react' ;
import {onAuthStateChangedListner , createUserDocumentFromAuth} from '../utils/firebase/firebase-component'

export const UserContext = createContext({}) ; 


export const UesrProvider = ({children})=>{

    useEffect(()=>{
        const changes = onAuthStateChangedListner((user)=>{
            if(user) {
                createUserDocumentFromAuth(user)
            }
            setContex(user)
        })
        return changes ;
    } ,[])
    const [contex , setContex] = useState(null) ;

    return <UserContext.Provider value={
        { contex , setContex }
    }>
        {children}
    </UserContext.Provider>

}