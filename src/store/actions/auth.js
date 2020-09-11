import axios from 'axios'
import {AUTH_SUCCESS, AUTH_LOGOUT} from '../actions/actionTypes'

export function auth(email, password, isLogin) {
    return async dispatch => {
        const authData = {
            email, password,
            returnSecureToken: true
        }

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB15rM6N_9En0qnoHle_cj-wpB3bL3TLTU'

        if (isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB15rM6N_9En0qnoHle_cj-wpB3bL3TLTU'
        }

        const response = await axios.post(url, authData)
        const data = response.data

        const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)

        localStorage.setItem('token', data.idToken)
        localStorage.setItem('userId', data.localId)
        localStorage.setItem('expirationDate', expirationDate)

        dispatch(autoSuccess(data.idToken))  
        dispatch(autoLogout(data.expiresIn)) 
    }
}

export function autoLogout (time) {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, time * 1000)
    }
}

export function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expirationDate')
    return {
        type: AUTH_LOGOUT
    }
}

export function autoLogin() {
    return dispatch => {
        const token = localStorage.getItem('token')
        if (!token) {
            dispatch(logout())
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if (expirationDate <= new Date()) {
                dispatch(logout())
            } else {
                dispatch(autoSuccess(token))  
                dispatch(autoLogout((expirationDate.getTime() - new Date()) / 1000)) 
            }
        }
    }
}

export function autoSuccess (token) {
    return {
        type: AUTH_SUCCESS,
        token
    }
}