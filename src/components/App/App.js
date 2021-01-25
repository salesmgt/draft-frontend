import React from 'react'
import './App.css'
import { SchoolPage } from '../../pages/SchoolPage'
import { SchoolContextProvider } from '../../contexts'

function App() {
  return (
    <SchoolContextProvider>
      <SchoolPage />
    </SchoolContextProvider>
  )
}

export default App
