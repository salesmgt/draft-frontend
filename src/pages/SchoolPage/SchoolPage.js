import React,{useState} from 'react'
import { MyTableTab } from '../../components/MyTableTab'
import * as Const from '../../components/MyTableTab/MyTableTabConst'
import {data} from "../../store"
import { MyToolbar } from '../../components/MyToolbar'

function SchoolPage() {
  const [levels,] = useState([Const.PRIMARY_SCHOOL,Const.SECONDARY_SCHOOL,Const.HIGH_SCHOOL]);
  const schoolTypeList =["Dân lập","Công lập","Bán công"]
  const districtList=["Q1","Q2","Q3","Q4","Q5","Q6","Tân Bình","Bình Tân","Nhà Bè","Bình Chánh"]
  const statusList=["Cũ","Mới"]
  const selectTypes = ["School type","District","Status"]
  const [filter,setFilter] = useState(
    { levels:"",
      schoolType: "",
      district: "",
      status: "",
      search:""
    });
  
  const handleTabSelected = tab => {
    let newFilter = {...filter,level:tab}
    setFilter(newFilter)
    const newSchool = data.filter(item => item.level === tab) 
    console.log(newSchool)
    console.log(filter)                                      
  }

const handleOnSubmit = (newFilter) =>{
  setFilter({...newFilter,levels: filter.levels})
}

  return (
    <>
  <MyTableTab levels={levels}  tab={filter.level} onSelect={handleTabSelected}/>
  <MyToolbar 
  onSubmit={handleOnSubmit} 
  filter={filter}
  schoolTypeList={schoolTypeList}  
  districtList={districtList} 
  statusList={statusList} 
  selectTypes={selectTypes}
  />
   </>)
}
SchoolPage.propTypes = {}
export default SchoolPage
