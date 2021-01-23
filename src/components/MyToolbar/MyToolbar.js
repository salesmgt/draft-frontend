import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {MySelect} from '../MySelect'
import {MySearchField} from '../MySearchField'
import FormControl from '@material-ui/core/FormControl';

MyToolbar.propTypes = {
  schoolTypeList: PropTypes.array,
  districtList: PropTypes.array,
  statusList: PropTypes.array,
  selectTypes: PropTypes.array,
  filter: PropTypes.object
  }

MyToolbar.defaultProps = {
    schoolTypeList: [],
    districtList: [],
    statusList:[],
    selectTypes:[],
    filter: null
    }

function MyToolbar(props) {
  const {schoolTypeList,districtList,statusList,selectTypes,filter,onSubmit} = props
  
  const [filters,setFilters] = useState(
    { 
      schoolType: "",
      district: "",
      status: "",
      search:""
    });

  const {schoolType,district,status} = filters

  const handleFilterChange = value => {
    const newFilter= {...filters,search: value} 
    setFilters(newFilter)
    onSubmit(filters)
    console.log("Gia tri fields: ",newFilter)
  }

  const handleSelectItem =(value,select)=>{
    let newFilter = {}
    console.log("halo  ",select.label)
    switch(select.label){
      case selectTypes[0]:
            newFilter= {...filter,schoolType: value} 
            break
      case selectTypes[1]:
        newFilter= {...filter,district:value}
            break
      case selectTypes[2]:
        newFilter= {...filter,status:value}
            break
      default : break
    }
    setFilters(newFilter)
    if(onSubmit)     
    onSubmit(filters)
    console.log("Gia tri fields: ",filters)
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

