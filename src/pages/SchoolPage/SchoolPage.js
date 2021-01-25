import React, { useContext } from 'react'
import { MyTableTab, MyTable, MyToolbar } from '../../components'
// import { data as schoolData } from '../../data'
import { SchoolContext } from '../../contexts'

function SchoolPage() {
  /* const handleTabSelected = tab => {
    let newFilter = {...filter,level:tab}
    setFilter(newFilter)
    const newSchool = data.filter(item => item.level === tab) 
    console.log(newSchool)
    console.log(filter)                                      
  }*/

  // Titles will be shown in the Table's columns (mockup)
  const columns = ['ID', 'School name', 'Level', 'School Type', 'District', 'Address', 'Contact', 'Representor', 'Status', 'Actions']

  // Load Context schools
  const { schools } = useContext(SchoolContext)
  // const  = context
  // console.log('SchoolPage - context: ', context)

  return (
    <>
      <MyTableTab />
      <MyToolbar />
      <MyTable columns={columns} rows={schools} />
    </>
  )
}
export default SchoolPage
