import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState ={
	user:null,
	error:null,
	loading:false,
    token:null
};


const signupStart = (state,action)=>{
       return updateObject(state,{
        	    error: null,
        	  	loading:true
        	  });		
}

const signupSuccess = (state,action)=>{
       return updateObject(state,{
        	  	    error: null,
        	  	    loading:false,
        	  	    user:action.userData,
                    token:null
        	   })		
            
}

const signupFail = (state,action)=>{
       return  updateObject(state,{
        	  	    error: action.error,
        	  	    loading:false,
                    token:null,
        	  	    user:null
        	   })		
            
}

const loginStart = (state,action)=>{
       return updateObject(state,{
        	    error: null,
        	  	loading:true
        	  });		
}

const loginSuccess = (state,action)=>{
       return updateObject(state,{
        	  	    error: null,
        	  	    loading:false,
                    loggedIn:true,
                    token:action.token,
        	  	    user:action.userData
        	   })		
            
}

const loginFail = (state,action)=>{
       return  updateObject(state,{
        	  	    error: action.error,
        	  	    loading:false,
                    loggedIn:false,
        	  	    user:null
        	   })		
            
}

const logoutStart = (state,action)=>{
       return updateObject(state,{
        	    error: null,
        	  	loading:true
        	  });		
}

const logoutSuccess = (state,action)=>{
       return updateObject(state,{
        	  	    error: null,
        	  	    loading:false,
                    loggedIn:false,
        	  	    user:null
        	   })		
            
}

const logoutFail = (state,action)=>{
       return  updateObject(state,{
        	  	    error: action.error,
        	  	    loading:false
        	   })		
            
}




const reducer = (state = initialState,action)=>{
	switch(action.type){
		case actionTypes.SIGNUP_START: return signupStart(state,action);
        case actionTypes.SIGNUP_SUCCESS: return signupSuccess(state,action);
        case actionTypes.SIGNUP_FAIL: return signupFail(state,action); 		
        case actionTypes.LOGIN_START: return loginStart(state,action);
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state,action);
        case actionTypes.LOGIN_FAIL: return loginFail(state,action); 		
        case actionTypes.LOGOUT_START: return logoutStart(state,action);
        case actionTypes.LOGOUT_SUCCESS: return logoutSuccess(state,action);
        case actionTypes.LOGOUT_FAIL: return logoutFail(state,action); 		
        default: return state;
    }
};

export default reducer;