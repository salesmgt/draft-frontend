import React, {useState, useEffect, useContext} from 'react'
import PropTypes from 'prop-types'
import { Box, TextField } from '@material-ui/core'
import {MySelect} from '../../components'
import {ADD_SCHOOL} from '../../reducers/types'
import {SchoolContext} from '../../contexts'
import {useForm,MyForm} from '../../components'
import {MyInput} from '../../components'
const initialFValues = {
    id: 999,
    schoolName: '',
    type: '',
    district: '',
    address: '',
    contact: '',
    representor: '',
    status: '',
    level: '',
  }


const SchoolForm = () => {
   const {values,handleInputChange ,setValues} = useForm(initialFValues)
    const context = useContext(SchoolContext)
    const {levels,selectTypes,schoolTypeList,statusList,districtList,filter, dispatch} = context
    const handleSelectItem = (value,label) =>{
        switch (label) {
          case "Status":
            setValues({...values,status: value})
            console.log(values)
            break
          case "Area":
            setValues({...values,district: value})
            console.log(values)
            break
          case selectTypes[2]:
            setValues({...values,status: value})
            console.log(values)
            break
          default:
            break
        }
      }
      const handleOnChange = (e) =>{
            const {name, value} = e.target
            setValues({...values,[name]:value})
            console.log(values)
      } 
    return (
        <MyForm>
           <Box display='flex' bgcolor='background.paper'>
             <Box >
                <MyInput name="schoolName"  label="School name"/>
                  <MySelect label = {"Status"} item={values.status} onSelect={handleSelectItem} items ={statusList}/>
                  <MySelect label = {"Area"} item={values.district} onSelect={handleSelectItem} items ={districtList}/>
             </Box>
           </Box>
            
           </MyForm>
    )
}

SchoolForm.propTypes = {
    
}

export default SchoolForm
