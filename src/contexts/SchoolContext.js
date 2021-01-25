import React, { createContext, useReducer, useState, useEffect } from 'react'
import { FilterSchoolReducer, SchoolReducer } from '../reducers'
import { GET_SCHOOLS } from '../reducers/types'

export const SchoolContext = createContext()

const SchoolContextProvider = ({children}) =>{
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
            level: "Tiểu học",
            schoolType: "",
            district: "",
            status: "",
            search: ""
          }
    )
    //school is School list-data-state => show in Table. 
    const [schools, dispatchSchools] = useReducer(SchoolReducer,[])
    //Load TypesList(mockup)
    useEffect(() => {
        async function fetchPostList(){
        let newList = ["Công lập", "Ngoài công lập","Bán công"]
         setSchoolTypeList(newList)
         newList = ["1","2","3","4","5","6","7","Tân Bình","Bình Tân","Nhà Bè","Bình Chánh"]
         setDistrictList(newList)
         newList =  ["Cũ","Mới"]
         setStatusList(newList)
         newList = ["School type","District","Status","Levels"]
         setSelectTypes(newList)
         newList = ["Tiểu học","Trung học cơ sở","Trung học phổ thông"]
         setLevels(newList)
        }
        fetchPostList()
     }, [])
     //Load schools data mockup from file data
     useEffect(() => {
        async function fetchPostList(){
         try {
<<<<<<< HEAD
             dispatchSchool({
                 type: GET_SCHOOLS, 
=======
             dispatchSchools({
                 type: GET_SCHOOLS,
>>>>>>> 614ad888b4f5ab86090f71459a62c170a4190bd7
                 payload: filter
             })
        /*const paramsString = queryString.stringify(filters); Dont remove this cmt !!!!!
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });

        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);*/
      } catch (error) {
        console.log('Fail to fetch data')
      }
    }
    fetchPostList()
  }, [filter])
  //Context Data
  const SchoolContextData = {
    filter,
    levels,
    dispatch,
    schoolTypeList,
    districtList,
    statusList,
    selectTypes,
    schools,
    dispatchSchools,
  }
  //Return SchoolContextProvider
  return <SchoolContext.Provider value={SchoolContextData}>{children}</SchoolContext.Provider>
}

export default SchoolContextProvider
