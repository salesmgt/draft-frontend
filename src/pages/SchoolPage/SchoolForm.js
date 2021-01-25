import React, {useState, useEffect, useContext} from 'react'
import PropTypes from 'prop-types'
import { Box, TextField } from '@material-ui/core'
import {MySelect} from '../../components/MySelect'
import {ADD_SCHOOL} from '../../reducers/types'
import {SchoolContext} from '../../contexts'

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


const SchoolForm = (props) => {
    const [values,setValues] = useState(initialFValues)
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
    
    return (
        <form>
           <Box display='flex' bgcolor='background.paper'>
             <Box >
                <TextField            
                id="standard-textarea"
                variant='outlined'
                label='School name *'
                multiline
                placeholder='Nguyễn Trung Trực'
                value={"values.schoolName"}
                />
                  <MySelect label = {"Status"} item={values.status} onSelect={handleSelectItem} items ={statusList}/>
                  <MySelect label = {"Area"} item={values.district} onSelect={handleSelectItem} items ={districtList}/>
             </Box>
             <Box>

             </Box>
           </Box>
            
        </form>
    )
}

SchoolForm.propTypes = {
    
}

export default SchoolForm
