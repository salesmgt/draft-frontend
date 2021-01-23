import React, {createContext, useReducer, useState, useEffect} from 'react'
import {FilterSchoolReducer} from '../reducers'
export const SchoolContext = createContext()

export default ({children}) =>{

    ///State(mockup data),  =>this states will be deleted later 
    const [levels,setLevels] = useState([])
    const [schoolTypeList,setSchoolTypeList] = useState([])
    const [districtList,setDistrictList] = useState([])
    const [statusList,setStatusList] = useState([])
    const [selectTypes,setSelectTypes] = useState([])
   
    //Declare Reducer 
    const [filter, dispatch] = useReducer(
        FilterSchoolReducer, 
        {
            levels: "Tiểu Học",
            schoolType: "",
            district: "",
            status: "",
            search:""
          }
    )

    //Load Levels (mockup), Will be complete later 
    useEffect(() => {
       const newList = ["Tiểu Học","Trung học cơ sở","Trung học phổ thông"]
        setLevels(newList)
    }, [])
    //Load TypesList(mockup)
    useEffect(() => {
        const newList = ["Dân lập","Công lập","Bán công"]
         setSchoolTypeList(newList)
     }, [])
    useEffect(() => {
        const newList = ["Q1","Q2","Q3","Q4","Q5","Q6","Tân Bình","Bình Tân","Nhà Bè","Bình Chánh"]
         setDistrictList(newList)
     }, [])
    useEffect(() => {
        const newList =  ["Cũ","Mới"]
         setStatusList(newList)
     }, [])
     useEffect(() => {
        const newList = ["School type","District","Status"]
         setSelectTypes(newList)
     }, [])
     
    //Context Data
    const SchoolContextData = {
        filter,
        levels,
        dispatch,
        schoolTypeList,
        districtList,
        statusList,
        selectTypes
    }
   
    //Return 
    return(
        <SchoolContext.Provider value={SchoolContextData}>
            {children}
        </SchoolContext.Provider>
    )
}
