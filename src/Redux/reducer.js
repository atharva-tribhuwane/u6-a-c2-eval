import {AUTH_TOKEN} from "./action"


export const reducer = (store,action)=>{
        switch(action.type){
            case AUTH_TOKEN:{
                return{...store, auth_token: action.payLoad}
            }
        }
}