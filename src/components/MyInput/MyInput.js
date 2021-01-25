import React from 'react'
import {TextField } from '@material-ui/core'
export default function MyInput(props) {
    const {name,label,value,onChange,placeHolder} = props
    return (      
           <TextField     
                name={name}  
                onChange={onChange}     
                id="standard-textarea"
                variant='outlined'
                label={label}
                multiline
                placeholder={placeHolder}
                values={value}
                />       
    )
}
