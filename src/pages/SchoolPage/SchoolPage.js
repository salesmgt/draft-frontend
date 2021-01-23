import React from 'react'
import { MyTableTab, MyTable, MyToolbar } from '../../components'
import { data as schoolData } from '../../data'
import {SchoolContextProvider} from '../../contexts'

function SchoolPage() {

 /* const handleTabSelected = tab => {
    let newFilter = {...filter,level:tab}
    setFilter(newFilter)
    const newSchool = data.filter(item => item.level === tab) 
    console.log(newSchool)
    console.log(filter)                                      
  }*/

  return (
    <SchoolContextProvider>
        <MyTableTab/>
        <MyToolbar/>
   </SchoolContextProvider>)
}
export default SchoolPage

