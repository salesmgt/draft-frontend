import React, {useContext} from 'react'
import { IconContext } from 'react-icons'
import { Toolbar, Tabs, Tab } from '@material-ui/core'
import classes from './MyTableTab.module.scss'
import {SchoolContext} from '../../contexts'
import {REQUEST_SCHOOLS_BY_LEVELS} from '../../reducers/types'

export default function MyTableTab() {
  const context = useContext(SchoolContext)
  const {dispatch,levels,filter} = context
   

  const index = filter.level ? levels.findIndex((item) => item === filter.level): 0
  //
  const onIndexSelect = (e,val) => {
     dispatch({
       type: REQUEST_SCHOOLS_BY_LEVELS,
       payload: levels[val]
     })
    }
  return (
    <IconContext.Provider value={{ color: '#000' }}>
      <Toolbar>
        <Tabs value={index} className={classes.tabs} onChange={onIndexSelect} centered>
          {levels.map((school, index) => (
            <Tab key={index} label={school} />
          ))}
        </Tabs>
      </Toolbar>
    </IconContext.Provider>
  )
}
