import React,{useContext,useState} from 'react'
import {MySelect} from '../MySelect'
import { makeStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import {MySearchField} from '../MySearchField'
import {FormControl,Paper} from '@material-ui/core/'
import {SchoolContext} from '../../contexts'
import { FaFileExport } from "react-icons/fa";
import {
      REQUEST_SCHOOLS_BY_SCHOOLTYPE,
      REQUEST_SCHOOLS_BY_DISTRICT, 
      REQUEST_SCHOOLS_BY_STATUS, 
      REQUEST_SCHOOLS_BY_SEARCH
} from '../../reducers/types'
import {MyButton} from '../MyButton'
import {MyPopup} from '../MyPopup'


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}))

function MyToolbar() {
  const [openPopup,setOpenPopup] = useState(false)
  const style = useStyles()
  const context = useContext(SchoolContext)
  const {selectTypes,schoolTypeList,statusList,districtList,filter, dispatch} = context
  const {schoolType,district,status} = filter
  //Logic dispatch a action to reducer 
  const handleSelectItem = (value,label) =>{
    switch (label) {
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
  return (<>
    <Paper elevation={3} className={style.pageContent}>
    
  <FormControl style={{flexDirection: 'row', alignItems: 'center',justifyContent: 'space-between', width: '80%'} }>
  <div>
    <MySelect label={selectTypes[0]} item={schoolType} onSelect={handleSelectItem} items ={schoolTypeList}/>
    <MySelect label = {selectTypes[1]} item={district} onSelect={handleSelectItem} items ={districtList}/>
    <MySelect label = {selectTypes[2]} item={status} onSelect={handleSelectItem} items ={statusList}/>
  </div>
  <div>
    <MySearchField onSubmit={handleFilterChange} />
   
    </div>
    <MyButton onClick={() => setOpenPopup(true)} label={"Add"}><AddIcon/></MyButton>
    <MyButton label={"Export"}><FaFileExport/></MyButton>
    </FormControl> 
    </Paper>
    <MyPopup 
    openPopup = {openPopup}
    setOpenPopup = {setOpenPopup}
    >

    </MyPopup>
  </>)
}
export default MyToolbar
