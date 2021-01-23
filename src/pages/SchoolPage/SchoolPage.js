import React, { useState } from 'react'
import { MyTableTab, MyTable, MyToolbar } from '../../components'
import { data as schoolData } from '../../data'

function SchoolPage() {
  const [levels, setLevels] = useState(['Tiểu học', 'Trung học cơ sở', 'Trung học phổ thông'])
  const schoolTypeList = ['Dân lập', 'Công lập', 'Bán công']
  const districtList = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Tân Bình', 'Bình Tân', 'Nhà Bè', 'Bình Chánh']
  const statusList = ['Cũ', 'Mới']
  const selectTypes = ['School type', 'District', 'Status']
  const [filter, setFilter] = useState({
    level: 'Tiểu học',
    schoolType: '',
    district: '',
    status: '',
    search: '',
  })

  let newSchoolList = schoolData.filter((item) => item.level === 'Tiểu học')
  const [schools, setSchools] = useState(newSchoolList)

  const handleTabSelected = (tab) => {
    let newFilter = { ...filter, level: tab }
    setFilter(newFilter)

    //array is filtered
    newSchoolList = schoolData.filter((item) => item.level === tab)
    setSchools(newSchoolList)

    console.log('schoolList', newSchoolList)
    console.log('filter', filter)
  }
  const handleToolbarChange = (value, select) => {
    let newFilter = {}
    switch (select) {
      case selectTypes[0]:
        newFilter = { ...filter, schoolType: value }
        break
      case selectTypes[1]:
        newFilter = { ...filter, district: value }
        break
      case selectTypes[2]:
        newFilter = { ...filter, status: value }
        break
      default:
        break
    }
    setFilter(newFilter)
    console.log(newFilter)
  }

  // KHÔNG bao giờ đc để setState() trực tiếp trong code của component.
  // setSchools(newSchoolList)

  return (
    <>
      <MyTableTab levels={levels} tab={filter.level} onSelect={handleTabSelected} />
      <MyToolbar filter={filter} onChange={handleToolbarChange} schoolTypeList={schoolTypeList} districtList={districtList} statusList={statusList} selectTypes={selectTypes} />
      <MyTable rows={schools} />
    </>
  )
}

SchoolPage.propTypes = {}

export default SchoolPage
