import { createAction } from "../../utils/reducer/reducer.util" ;

export const setContex = (user) =>{
   return createAction("SET_CURRENT_USER" , user)
}