import axios from 'axios';
import {GET_IMAGES, GET_IMAGES_FULFILLED, GET_IMAGES_REJECTED,GET_COROUSEL_IMAGES,GET_COROUSEL_IMAGES_FULFILLED,GET_COROUSEL_IMAGES_REJECTED} from './actionTypes'
export const getImages = (val) => {
    return dispatch => {
        //Dispatch the fetchData actio creator before retrieving to set our loading state to true.
        dispatch(fetchData(true));
        //Then get the data.
        axios.get(`http://shibe.online/api/shibes?count=${val}&urls=true&httpsUrls=true`).then(res => {
           dispatch(fetchDataFulfilled(res.data));
            //Error handle the promise and set your errorMessage
        }).catch(err => {
        dispatch(fetchDataRejected(err))});
    }
}

export const getCorouselImages = (val) => {
    return dispatch => {
        //Dispatch the fetchData actio creator before retrieving to set our loading state to true.
        dispatch(fetchData1(true));
        //Then get the data.
        axios.get(`http://shibe.online/api/shibes?count=${val}&urls=true&httpsUrls=true`).then(res => {
           dispatch(fetchDataFulfilled1(res.data));
            //Error handle the promise and set your errorMessage
        }).catch(err => {
        dispatch(fetchDataRejected1(err))});
    }
}


const fetchData = (bool) => {
    //return a action type and a loading state indicating it is getting data. 
    return {
        type: GET_IMAGES,
        payload: bool,
    };
}
const fetchDataFulfilled = (data) => {
    //Return a action type and a loading to false, and the data.
    return {
        type: GET_IMAGES_FULFILLED,
        payload: data,
        loading: false,
    };
}

const fetchDataRejected = (error) => {
    //Return a action type and a payload with a error
    return {
        type: GET_IMAGES_REJECTED,
        payload: error,
        loading: false,
    };
}

const fetchData1 = (bool) => {
    //return a action type and a loading state indicating it is getting data. 
    return {
        type: GET_COROUSEL_IMAGES,
        payload: bool,
    };
}
const fetchDataFulfilled1 = (data) => {
    //Return a action type and a loading to false, and the data.
    return {
        type: GET_COROUSEL_IMAGES_FULFILLED,
        payload: data,
        loading: false,
    };
}

const fetchDataRejected1 = (error) => {
    //Return a action type and a payload with a error
    return {
        type: GET_COROUSEL_IMAGES_REJECTED,
        payload: error,
        loading: false,
    };
}