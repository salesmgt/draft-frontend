import {GET_SCHOOLS} from './types'
import { data as schoolData } from '../data'

export const SchoolReducer = (state,action) => {
    const {type,payload} = action
    const {level, district, schoolType, status, search} =  payload
    switch(type){
        case GET_SCHOOLS:
            let list = []
            if(level) {
               list = schoolData.filter(item => item.level===level)            
               if(schoolType.length!==0)              
                    list = list.filter(item => item.type===schoolType)
                if(district.length!==0)
                    list = list.filter(item => item.district===district)
                if(status.length!==0)
                    list = list.filter(item => item.status===status)
                if(search.length!==0)
                    list = list.filter(item => item.schoolName.includes(search))
            }
            console.log('SchoolReducer: ', list)           
            state = [...list]
            return state
        default: return state
    }
}