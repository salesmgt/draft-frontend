import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { MyTableTab } from '../../components/MyTableTab'
import * as Const from '../../components/MyTableTab/MyTableTabConst'
import {data} from "../../store"

function SchoolPage(props) {
  const [schoolTypes,setSchoolTypes] = useState([Const.PRIMARY_SCHOOL,Const.SECONDARY_SCHOOL,Const.HIGH_SCHOOL]);
  const [category,setCategory] = useState(Const.PRIMARY_SCHOOL)
  const handleCategorySelected = category => {
    setCategory(category)

    //array is filtered
    const newSchool = data.filter( item => item.level === category)
    console.log(newSchool)
  }
  return <MyTableTab schoolTypes={schoolTypes}  category={category}
  onSelect={handleCategorySelected}/>
}


SchoolPage.propTypes = {}

export default SchoolPage
