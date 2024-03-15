import { Base_Url } from "../../utils/Urls"
import { USER_DETAILS } from "../reducer/Holder"
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LoginApi = (data,setLoader) => {
    return async (dispatch) => {
        try {
            setLoader(true)
            const baseUrl = `${Base_Url}login`
            const myData = new FormData()

            myData.append('email',data.email)
            myData.append('password',data.password)

            const response = await fetch(baseUrl,{
                method: 'POST',
                body: myData
            })

            const responseData = await response.json()

            if(responseData.ok){
                await AsyncStorage.setItem('user_details',JSON.stringify(responseData.data))
                dispatch({ type: USER_DETAILS, payload: responseData.data })
                setLoader(false)
            }else{
                setLoader(false)
            }
        } catch (error) {
            setLoader(false)
            console.log('error LoginApi', error)
        }
    }
}

export const RegisterApi = (data,setLoader) => {
    return async (dispatch) => {
        try {
            setLoader(true)
            const baseUrl = `${Base_Url}register`
            const myData = new FormData()

            myData.append('email',data.email)
            myData.append('password',data.password)
            myData.append('password_confirm',data.c_password)
            myData.append('email_check', 1)

            const response = await fetch(baseUrl,{
                method: 'POST',
                body: myData
            })

            const responseData = await response.json()

            if(responseData.ok){
                await AsyncStorage.setItem('user_details',JSON.stringify(responseData.data))
                dispatch({ type: USER_DETAILS, payload: responseData.data })
                setLoader(false)
            }else{
                setLoader(false)
            }
        } catch (error) {
            setLoader(false)
            console.log('error RegisterApi', error)
        }
    }
}

export const LogOutApi = (data,setLoader) => {
    return async (dispatch) => {
        try {
            setLoader(true)
            const baseUrl = `${Base_Url}logout`

            const response = await fetch(baseUrl,{
                method: 'GET',
            })

            const responseData = await response.json()

            if(responseData.ok){
                await AsyncStorage.removeItem('user_details')
                dispatch({ type: USER_DETAILS, payload: null })
                setLoader(false)
            }else{
                setLoader(false)
            }
        } catch (error) {
            setLoader(false)
            console.log('error LogOutApi', error)
        }
    }
}