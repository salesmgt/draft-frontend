import React,{useState} from 'react'
import { MyTableTab } from '../../components/MyTableTab'
import * as Const from '../../components/MyTableTab/MyTableTabConst'
import {data} from "../../store"
import { MyToolbar } from '../../components/MyToolbar'

function SchoolPage() {
  const [levels,setLevels] = useState([Const.PRIMARY_SCHOOL,Const.SECONDARY_SCHOOL,Const.HIGH_SCHOOL]);
  const schoolTypeList =["Dân lập","Công lập","Bán công"]
  const districtList=["Q1","Q2","Q3","Q4","Q5","Q6","Tân Bình","Bình Tân","Nhà Bè","Bình Chánh"]
  const statusList=["Cũ","Mới"]
  const selectTypes = ["School type","District","Status"]
  const [filter,setFilter] = useState(
    { 
      level:Const.PRIMARY_SCHOOL,
      schoolType: "",
      district: "",
      status: "",
      search:""
    });


  const handleTabSelected = tab => {
    let newFilter = {...filter,level:tab}
    setFilter(newFilter)

    //array is filtered
    const newSchool = data.filter( item => item.level === tab)
    console.log(newSchool)
    console.log(filter)
  }
  const handleToolbarChange =(value,select)=>{
    let newFilter = {}
    switch(select){
      case selectTypes[0]:
            newFilter= {...filter,schoolType: value} 
            break
      case selectTypes[1]:
        newFilter= {...filter,district:value}
            break
      case selectTypes[2]:
        newFilter= {...filter,status:value}
            break
    }
    setFilter(newFilter)
    console.log(newFilter)
  } 

  return (
    <>
  <MyTableTab levels={levels}  tab={filter.level} onSelect={handleTabSelected}/>
  <MyToolbar filter={filter} onChange={handleToolbarChange} schoolTypeList={schoolTypeList}  districtList={districtList} statusList={statusList} selectTypes={selectTypes}/>
   </>)
}


SchoolPage.propTypes = {}

export default SchoolPage
