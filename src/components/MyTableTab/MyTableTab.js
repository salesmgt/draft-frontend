import React from 'react'
import { IconContext } from 'react-icons'
import { Toolbar, Tabs, Tab } from '@material-ui/core'
import * as Const from './MyTableTabConst'
import classes from './MyTableTab.module.scss'

function MyTableTab(props) {
  return (
    <IconContext.Provider value={{ color: '#000' }}>
      <Toolbar>
        <Tabs className={classes.tabs} centered>
          <Tab label={Const.PRIMARY_SCHOOL} />
          <Tab label={Const.SECONDARY_SCHOOL} />
          <Tab label={Const.HIGH_SCHOOL} />
        </Tabs>
      </Toolbar>
    </IconContext.Provider>
  )
}

export default MyTableTab
