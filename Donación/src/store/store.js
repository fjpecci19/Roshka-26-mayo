import {createStore} from 'redux'
const initialState = {token: null}

const rootReducer = (state = initialState, action) => {
    if (action.type === "setToken"){
        return {
            ...state,
            token: action.payload
        }
    }

    if (action.type === "nullToken"){
        return {
            ...state,
            token: null
        }
    }

    return state
}

const store = createStore(rootReducer)

export default store
