import React,{useState} from 'react'
import PropTypes from 'prop-types'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

MySelect.propTypes = {
onSelect: PropTypes.func,
  label: PropTypes.string,
  items: PropTypes.array,
  item:PropTypes.string
}
MySelect.defaultProps = {
  onSelect: null,
  label: "",
  items: null,
  item:""
  
  }

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 125,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
     
    },
  }));

export default function MySelect(props) {
    const classes = useStyles();
    const{items,onSelect,item,label} = props

const handleSelect = (e) =>{
   if (onSelect) {
       onSelect(e.target.value,{label})

   }
    return
}
  return (
    <FormControl variant="filled" className={classes.formControl} >
    <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>
      <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={item}
          onChange={handleSelect}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          {items.map((item,index) => 
            <MenuItem key={index} value={item}>{item}</MenuItem>
          )}
        </Select>    
    </FormControl>
  )
}
