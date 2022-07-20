import { GET_DATA_FAIL, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionType"


const initState={
    data:[],
    isLoading:false,
    isError:false
}

export const ArfReducer=(state=initState,action)=>{
   switch(action.type){
    case GET_DATA_REQUEST:{
        return{
            ...state,
            isLoading:true,
            isError:false
        }
    }
    case GET_DATA_SUCCESS:{
        return{
            ...state,
            isLoading:false,
            data:action.payload,
            isError:false
        }
    }
    case GET_DATA_FAIL:{
        return{
            ...state,
            isLoading:false,
            isError:true
        }
    }
    default:{
        return state
    }
   }
}