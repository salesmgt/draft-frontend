import React from 'react'
import { Checkbox, FormControl, FormControlLabel} from '@material-ui/core'

export default function MyCheckBox(props) {
    const {name,value,label,onChange} = props
    const convertToDefaultEventPara = (name,value) =>({
        target: {
          name, value
        }
      })
    return (
        <FormControl>
            <FormControlLabel control={
            <Checkbox 
            name={name} 
            color='primary'
            checked={value}
            onChange={e => onChange(convertToDefaultEventPara(name, e.target.checked))}
            />}
                label={label}
            />
        </FormControl>
    )
}
