import React,{useContext} from 'react'
import {MySelect} from '../MySelect'
import {MySearchField} from '../MySearchField'
import FormControl from '@material-ui/core/FormControl'
import {SchoolContext} from '../../contexts'
import {
      REQUEST_SCHOOLS_BY_SCHOOLTYPE,
      REQUEST_SCHOOLS_BY_DISTRICT, 
      REQUEST_SCHOOLS_BY_STATUS, 
      REQUEST_SCHOOLS_BY_SEARCH
} from '../../reducers/types'

function MyToolbar() {
  const context = useContext(SchoolContext)
  const {selectTypes,schoolTypeList,statusList,districtList,filter, dispatch} = context
  const {schoolType,district,status} = filter
  //Logic dispatch a action to reducer 
  const handleSelectItem = (value,label) =>{
    switch (label.label) {
      case selectTypes[0]:
        dispatch({
          type: REQUEST_SCHOOLS_BY_SCHOOLTYPE,
          payload: value
        })
        break
      case selectTypes[1]:
        dispatch({
          type: REQUEST_SCHOOLS_BY_DISTRICT,
          payload: value
        })
        break
      case selectTypes[2]:
        dispatch({
          type: REQUEST_SCHOOLS_BY_STATUS,
          payload: value
        })
        break
      default:
        break
    }
  }
  //dispatch search action to reducer
  const handleFilterChange = (value) =>{
    dispatch({
      type: REQUEST_SCHOOLS_BY_SEARCH,
      payload: value
    })
  }
  return (
  <FormControl style={{flexDirection: 'row', alignItems: 'center',justifyContent: 'space-between', width: '80%'} }>
  <div>
    <MySelect label={selectTypes[0]} item={schoolType} onSelect={handleSelectItem} items ={schoolTypeList}/>
    <MySelect label = {selectTypes[1]} item={district} onSelect={handleSelectItem} items ={districtList}/>
    <MySelect label = {selectTypes[2]} item={status} onSelect={handleSelectItem} items ={statusList}/>
  </div>
    <MySearchField onSubmit={handleFilterChange} />
    </FormControl>
  )
}
export default MyToolbar
