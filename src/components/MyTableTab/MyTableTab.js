import React from 'react'
import { IconContext } from 'react-icons'
import { Toolbar, Tabs, Tab } from '@material-ui/core'
import classes from './MyTableTab.module.scss'
import PropTypes from 'prop-types'

MyTableTab.propTypes = {
  onSelect: PropTypes.func,
  tab: PropTypes.string,
  levels: PropTypes.array,
}

MyTableTab.defaultProps = {
  onSelect: null,
  tab: '',
  levels: [],
}

export default function MyTableTab(props) {
  const { levels, tab, onSelect } = props

  const index = tab ? levels.findIndex((item) => item === tab) : 0

  const onIndexSelect = (e, index) => {
    onSelect(levels[index])
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
