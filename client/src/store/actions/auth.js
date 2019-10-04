import * as actionTypes from './actionTypes';
import axios from 'axios';

const baseurl = 'https://jssstu-cs.herokuapp.com';

export const signupStart = () =>{
	return {
		type:actionTypes.SIGNUP_START
	};
};

export const signupSuccess = (response) =>{
	return {
		type:actionTypes.SIGNUP_SUCCESS,
		userData:response.user
	};
};

export const signupFailure = (error) =>{
	return {
		type:actionTypes.SIGNUP_FAIL,
		error:error
	};
};

export const signup = (formData,username,password) =>{
	return dispatch =>{
		dispatch(signupStart());
		const url = baseurl+'/create';
        axios.post(url,
          formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
          ).then(response=>{
           if (!response.data.errmsg) {
            console.log('successful signup')
            console.log(response.data);
            let form = {
            	username : username,
            	password : password
            }
            console.log(form);
            dispatch(login(form));
          } else {
          	let errMsg = 'username already taken';
            let Err={
            	err:errMsg
            };
            console.log('username already taken')
            dispatch(signupFailure(Err));
          }
        }).catch(error => {
          console.log('signup error: ')
          console.log(error)
          dispatch(signupFailure(error));
        });
	};
}



export const loginStart = () =>{
	return {
		type:actionTypes.LOGIN_START
	};
};

export const loginSuccess = (response) =>{
	return {
		type:actionTypes.LOGIN_SUCCESS,
		userData:response.user,
		token:response.token
	};
};

export const loginFailure = (error) =>{
	return {
		type:actionTypes.LOGIN_FAIL,
		error:error
	};
};

export const login = (formData) =>{
	console.log(formData);
	return dispatch =>{
		dispatch(loginStart());
		const url = baseurl+'/login';
		axios.post(url,formData)
            .then(response => {
                console.log('login response: ')
                console.log(response.data)
                if (response.status === 200) {
                	localStorage.setItem('token', response.data.token);
                    dispatch(loginSuccess(response.data));
                }
            }).catch(error => {
                dispatch(loginFailure(error));
            })
	};
}

export const logoutStart = () =>{
	return {
		type:actionTypes.LOGOUT_START
	};
};

export const logoutSuccess = () =>{
	return {
		type:actionTypes.LOGOUT_SUCCESS
	};
};

export const logoutFailure = (error) =>{
	return {
		type:actionTypes.LOGOUT_FAIL,
		error:error
	};
};

export const logout = () =>{
	return dispatch =>{
		const url = baseurl+'/logout';
		axios.post(url).then(response => {
          console.log(response.data)
          if (response.status === 200) {
          	 localStorage.clear();
             dispatch(logoutSuccess());
          }
        }).catch(error => {
        	dispatch(logoutFailure())
        })
	};
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        console.log('dispatching actions');
        console.log(token);
        if (!token) {
            dispatch(logout());
        } else {
             const url = baseurl+'/getUser';
                console.log(url);
		        axios.get(url,
		           {
		            headers: {
		              'Authorization' : token
		            }
		          }
		          ).then(response=>{
		          	console.log(response);
		             let resObj = {
		             	 user : response.data,
		             	 token: token
		             }
		            dispatch(loginSuccess(resObj));
		        }).catch(error => {
		          console.log('login error: ')
		          console.log(error)
                    dispatch(loginFailure(error));
		        });               
        }
    };
};

