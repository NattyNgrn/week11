import { useState } from 'react'
import './App.css'
import Addnew from './components/addnew'
import AllContacts from './components/allcontacts'
import Header from './components/header'


function App() {
  const [pageToShow, setPageToShow] = useState("home");

  switch (pageToShow) {
      case "home" : return (<Home setPageToShow={setPageToShow}></Home>);
      case "add new": return (<Addnew setPageToShow={setPageToShow}></Addnew>);
  }
};

function Home({setPageToShow}) {
  const handleClick = event => setPageToShow("add new");
  return (
      <div>
        <Header></Header>
        <button onClick={handleClick} class="bg-amber-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md"> Add New Contact</button>
        <AllContacts></AllContacts>
      </div>
  )
}

export default App
