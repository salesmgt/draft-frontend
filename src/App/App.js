import React from 'react'
import './App.css'
import { SchoolPage } from '../pages/SchoolPage'
import { SchoolContextProvider} from '../contexts'

export default function App() {
  return <SchoolContextProvider><SchoolPage /></SchoolContextProvider>
}

