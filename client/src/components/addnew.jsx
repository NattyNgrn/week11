function Addnew() {
  function save(){

  }

  function cancel(){
    
  }

    return (
        <div>

          <form>
            <div class="flex flex-col items-center">
            <label for="name" class="text-lg font-medium text-amber-400">Name</label>
            <input type="text" id="name" class="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Name"/>

            <label for="email" class="text-lg font-medium text-amber-400">Email</label>
            <input type="email" id="email" class="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Email"/>

            <label for="phone" class="text-lg font-medium text-amber-400">Phone number</label>
            <input type="tel" id="phone" class="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Phone number"/>

            <label for="notes" class="text-lg font-medium text-amber-400">Notes</label>
            <textarea id="notes" class="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Notes"></textarea>

            <label htmlFor="cover-photo" className="block text-lg font-medium leading-6 text-amber-400">
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-amber-400 px-6 py-10">
                <div className="text-center">
                  <div className="mt-4 flex text-xl leading-6 text-amber-400">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer  font-semibold text-amber-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-orange-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-lg leading-5 text-amber-400">PNG, JPG, GIF up to 10MB</p>
                </div>
                </div>


            <div className="col-span-full">
              
            <div class="flex justify-center mt-4">
              <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md mr-2">Cancel</button>
              <button class="bg-amber-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md">Save</button>
            </div>


            </div>

            
            </div>
        </form>
        </div>

    )
};

export default Addnew;