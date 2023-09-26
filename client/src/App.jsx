import { useState } from 'react'
import './App.css'
import Addnew from './components/addnew'
import AllContacts from './components/allcontacts'
import Header from './components/header'

function App() {
 

  return (
      <div>
        <Header></Header>
        <Addnew></Addnew>
        <AllContacts></AllContacts>
      </div>
  )
}

export default App
