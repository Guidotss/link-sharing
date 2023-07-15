import { AuthState } from '.'
import { User } from '@/interfaces';

type AuthActionType =  
    |{ type:"[AUTH] - login", payload: User }
    |{ type:"[AUTH] - logout" }

export const authReducer = ( state:AuthState, action: AuthActionType ) : AuthState => { 
    switch( action.type ) { 
        case "[AUTH] - login":
            return { 
                ...state,
                user: action.payload,
            }
        case "[AUTH] - logout":
            return {
                ...state,
                user: null,
            } 
        
        default: 
            return { 
                ...state
            }
    }
}