import { createContext , useEffect , useReducer } from 'react' ;
import {onAuthStateChangedListner , createUserDocumentFromAuth} from '../utils/firebase/firebase-component'
import { createAction } from '../utils/reducer/reducer.util';

export const UserContext = createContext({}) ; 

const INITIOL = {
    contex : null ,
}

const userReducer = (state , action) =>{
    const { type , payload } = action ;

    switch(type) {
        case "SET_CURRENT_USER":
            return{
                ...state ,
                contex : payload ,
            } 
        default :
            console.log("Error Not Payload");
    }
}

export const UesrProvider = ({children})=>{

    const [{contex} , dispach] = useReducer(userReducer , INITIOL);

    const setContex = (user) =>{
       return dispach(createAction("SET_CURRENT_USER" , user))
    }

    useEffect(()=>{
        const changes = onAuthStateChangedListner((user)=>{
            if(user) {
                createUserDocumentFromAuth(user)
            }
            setContex(user)
        })
        return changes ;
    } ,[])
    
    // const [contex , setContex] = useState(null) ;

    return <UserContext.Provider value={
        { contex , setContex }
    }>
        {children}
    </UserContext.Provider>

}