import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {MySelect} from '../MySelect'
MyToolbar.propTypes = {

}

function MyToolbar(props) {
  const {schoolTypeList,districtList,statusList,selectTypes,onChange,filter} = props
  const {schoolType,district,status} = filter
  const handleSelectItem = (value,label) =>{
    if(onChange) {
      onChange(value,label.label)
    }
  }

  return (<>
    <MySelect label={selectTypes[0]} item={schoolType} onSelect={handleSelectItem} items ={schoolTypeList}/>
    <MySelect label = {selectTypes[1]} item={district} onSelect={handleSelectItem} items ={districtList}/>
    <MySelect label = {selectTypes[2]} item={status} onSelect={handleSelectItem} items ={statusList}/>
    </>
  )
}



export default MyToolbar

