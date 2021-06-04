import {GET_IMAGES, GET_IMAGES_FULFILLED, GET_IMAGES_REJECTED,GET_COROUSEL_IMAGES,GET_COROUSEL_IMAGES_FULFILLED,GET_COROUSEL_IMAGES_REJECTED} from './actionTypes'
const initialState = {
    //Have a people array responsible for getting the data and setting to the array.
    images: [],
    cimages : [],
    //Have the loading state indicate if it's done getting data.
    loading: true,
    //Have state for error message for recieving an error.
    errorMessage: '',
}

//Define your action types 
//Initiate the api call



//Define your reducer that will return the initialState by default
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_IMAGES: 
        return {...state, loading: action.payload};
        case GET_IMAGES_FULFILLED:
        return {...state, images: action.payload, loading: action.loading};
        case GET_IMAGES_REJECTED:
        return {...state, errorMessage: action.payload, loading: action.loading};
        case GET_COROUSEL_IMAGES: 
        return {...state, loading: action.payload};
        case GET_COROUSEL_IMAGES_FULFILLED:
        return {...state, cimages: action.payload, loading: action.loading};
        case GET_COROUSEL_IMAGES_REJECTED:
        return {...state, errorMessage: action.payload, loading: action.loading};
        default: 
        return state;
    }
}


export default reducer;