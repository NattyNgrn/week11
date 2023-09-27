import { useState, useEffect } from "react";
import { contactbyid } from "../serverfuncs";
import { deleteContact } from "../serverfuncs";
import { edit } from "../serverfuncs";

function Individual({setPageToShow, id}){
    function backToHome(){
        setPageToShow("home");
    }


    const [contact, setContact] = useState({});

    useEffect(()=>{
        contactbyid(id).then(result => setContact(result));
    }, []);

    async function deleteContact(id){
      await deleteContact(id);
      backToHome();
    }
    const [showEdit, setShowEdit] = useState(false);

    async function editContact(id){
      edit(id, contact.name, contact.email, contact.phone, contact.notes, contact.url);
    }

    return(
        <div className="px-4 sm:px-0">
          <img class="m-8 mx-auto rounded-full w-96 h-96 shadow-xl dark:shadow-gray-800" src= {contact.url} />
          <h1 className="m-8 text-xl font-medium text-amber-400">Name: {contact.name}</h1>
          <h1 className="m-8 text-xl font-medium text-amber-400">Email: {contact.email}</h1>
          <h1 className="m-8 text-xl font-medium text-amber-400">Phone: {contact.phone}</h1>
          <h1 className="m-8 text-xl font-medium text-amber-400">Notes: {contact.notes}</h1>
          
          <button onClick={()=>setShowEdit(true)} class=" m-4 bg-amber-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md"> Edit</button>
          <button onClick={deleteContact} class="m-4 bg-amber-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md"> Delete </button>
          <button onClick={backToHome} class=" m-4 bg-amber-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md"> Home </button>
        </div>
    )
}

export default Individual;