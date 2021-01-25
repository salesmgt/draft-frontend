import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'

export function useForm(initialFValues) {
    const [values,setValues] = useState(initialFValues)
    
    const handleInputChange = (e) =>{
        const {name, value} = e.target
        setValues({...values,[name]:value})
    }
    return ({
        values,
        setValues,
        handleInputChange
    }
    )
}
const useStyle = makeStyles((theme) => ({
    root:
    {
        '& .MutiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
  })) 

export function MyForm(props) {
    const style = useStyle()
    return (
        <form className={style.root}>
        {props.children}
        </form>
    )
}

