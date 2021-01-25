import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      textTransform: 'none',
    },
  }))
  
function MyButton(props) {
    const {label, onClick} = props
    const classes = useStyles()
    return (
        <Button
        onClick={onClick}
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={props.children}
      >
        {label}
      </Button>
    )
}

MyButton.propTypes = {

}

export default MyButton

