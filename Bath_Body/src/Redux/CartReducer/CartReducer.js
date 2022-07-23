import { GET_CART_FALIURE, GET_CART_REQUEST, GET_CART_SUCCESS } from "./actionType"


const intialState={

    isLoading:false,
    isError:"",
    gettoCart:[]
}

export const Cartreducer=(state=intialState,action)=>
{
const {type,payload} =action 
switch(type)
{
    case GET_CART_REQUEST:
        {
            return {
                ...state,
                isError:"",
                isLoading:true
            }
        };
        case GET_CART_SUCCESS:
            {
                return {
                    ...state,
                    isError:"",
                    isLoading:false,
                    gettoCart:payload
                }
            };
            case GET_CART_FALIURE:
                {
                    return {
                        ...state,
                        isError:payload,
                        isLoading:false,
                        AddtoCart:null
                    }
                };
                default: {
                    return { ...state };
                  }
}  
}