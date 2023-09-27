import {addnew} from "../serverfuncs.js"
import { useState, useEffect } from "react";

function Addnew({setPageToShow}) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [url, setUrl] = useState("");

  function backToHome(){
    setPageToShow("home");
  }

  async function save(e){
    e.preventDefault();
    if (name == "" || email == "" || phone == "" || url == ""){
      return;
    }
    const result = await addnew(name, email, phone, notes, url);
    setName("");
    setEmail("");
    setPhone("");
    setNotes("");
    setUrl("");
    await backToHome()
  }

  function cancel(){
    backToHome();
  }

    return (
        <div>

          <form>
            <div class="flex flex-col items-center">
            <label for="name" class="text-lg font-medium text-amber-400">Name</label>
            <input value={name}  onChange={(e) => {setName(e.target.value)}} type="text" id="name" class="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Name" required/>

            <label for="email" class="text-lg font-medium text-amber-400">Email</label>
            <input value={email}  onChange={(e) => {setEmail(e.target.value)}} type="email" id="email" class="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Email" required/>

            <label for="phone" class="text-lg font-medium text-amber-400">Phone number</label>
            <input value={phone}  onChange={(e) => {setPhone(e.target.value)}} type="tel" id="phone" class="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Phone number" required/>

            <label for="notes" class="text-lg font-medium text-amber-400">Notes</label>
            <textarea value={notes}  onChange={(e) => {setNotes(e.target.value)}} id="notes" class="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Notes" required></textarea>

            <label htmlFor="cover-photo" className="block text-lg font-medium leading-6 text-amber-400">
                Contact photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-amber-400 px-6 py-10">
                <div className="text-center">
                  <div className="mt-4 flex text-xl leading-6 text-amber-400">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer  font-semibold text-amber-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-orange-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" required/>
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-lg leading-5 text-amber-400">PNG, JPG, GIF up to 10MB</p>
                </div>
                </div>


            <div className="col-span-full">
              
            <div class="flex justify-center mt-4">
              <button onClick={cancel} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md mr-2">Cancel</button>
              <button type="submit" onClick={save} class="bg-amber-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md">Save</button>
            </div>


            </div>

            
            </div>
        </form>
        </div>

    )
};

export default Addnew;