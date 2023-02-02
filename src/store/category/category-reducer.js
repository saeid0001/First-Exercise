const INITIOAL = {
    category : []
}

export const categoryReducer = (state = INITIOAL , action = {}) =>{
    const { type , payload } = action ;

    switch(type) {
        case "SET_CATEGORY_ITEM" :
            return {
                ...state ,
                category: payload ,
            }
        default :
            return state 
    }
}