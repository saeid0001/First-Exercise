const INITIOL = {
    contex : null ,
}

export const userReducer = (state = INITIOL , action) =>{
    const { type , payload } = action ;

    switch(type) {
        case "SET_CURRENT_USER":
            return{
                ...state ,
                contex : payload ,
            } 
        default :
            return state
    }
}