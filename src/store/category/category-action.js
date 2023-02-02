import { createAction } from "../../utils/reducer/reducer.util";

export const setCategory = (user) =>{
    return createAction("SET_CATEGORY_ITEM" , user)
}