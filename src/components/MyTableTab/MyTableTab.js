import React from 'react'
import { IconContext } from 'react-icons'
import { Toolbar, Tabs, Tab } from '@material-ui/core'
import classes from './MyTableTab.module.scss'
import PropTypes from 'prop-types'

/*MyTableTab.propTypes = {
  onSelect: PropTypes.func,
  category: PropTypes.string,
  schoolTypes: PropTypes.array
}

MyTableTab.defaultProps = {
  onSelect: null,
  category: null,
  schoolTypes: null

}*/

const MyTableTab  = props => {
  
  const {schoolTypes,category,onSelect} =props
  const index = category ? schoolTypes.findIndex(item => item === category) :0

  const onIndexSelect = (e, index) =>{
    
    onSelect(schoolTypes[index])}

  return (
    <IconContext.Provider value={{ color: '#000' }}>
      <Toolbar>
        <Tabs value= {index} className={classes.tabs} onChange={onIndexSelect} centered>
        {schoolTypes.map((school,index) =>
          <Tab key={index} label={school} />
        )}
        </Tabs>
      </Toolbar>
    </IconContext.Provider>
  )
};

export default MyTableTab
