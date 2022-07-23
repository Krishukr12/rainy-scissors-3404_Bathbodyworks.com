import { GET_DATA_FAIL, GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_SUCCESS_SINGLE, UPDATE_DATA_ASCC } from "./actionType"


const initState={
    single:[],
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
    case UPDATE_DATA_ASCC: {
        return {
          ...state,
          data: action.payload,
          isLoading:false,
          isError:false
        };
      }
    case GET_DATA_SUCCESS_SINGLE:{
        return{
            ...state,
            isLoading:false,
            single:action.payload,
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