import {
    REQUEST_SCHOOLS_BY_LEVELS,
    REQUEST_SCHOOLS_BY_SCHOOLTYPE,
    REQUEST_SCHOOLS_BY_DISTRICT,
    REQUEST_SCHOOLS_BY_STATUS,
    REQUEST_SCHOOLS_BY_SEARCH,
} from './types'

export const FilterSchoolReducer = (state, action) => {
   
    const {type, payload} = action
    switch (type) {
        case REQUEST_SCHOOLS_BY_LEVELS: 
            return {...state,levels: payload}
        case REQUEST_SCHOOLS_BY_SCHOOLTYPE:
            console.log("hihi")
            return {...state,schoolType: payload}
        case REQUEST_SCHOOLS_BY_DISTRICT:
            return {...state,district: payload}
        case REQUEST_SCHOOLS_BY_STATUS:
            return {...state,status: payload}
        case REQUEST_SCHOOLS_BY_SEARCH:
            return {...state,search: payload}
    
        default: return state
    }
}