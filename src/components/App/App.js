import React,{useState} from 'react'
import './App.css'
import { MyTableTab } from '../MyTableTab'
import * as Const from '../MyTableTab/MyTableTabConst'
import {data} from "../../store"
function App() {
  const [schoolTypes,setSchoolTypes] = useState([Const.PRIMARY_SCHOOL,Const.SECONDARY_SCHOOL,Const.HIGH_SCHOOL]);
  const [category,setCategory] = useState(Const.PRIMARY_SCHOOL)
  const handleCategorySelected = category => {
    setCategory(category)
    const newSchool = schools.filter( item => item.type === category)
  }
  return <MyTableTab schoolTypes={schoolTypes}  category={category}
  onSelect={handleCategorySelected} />
}

export default App
