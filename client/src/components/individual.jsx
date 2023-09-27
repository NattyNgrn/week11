
function Individual({setPageToShow}){
    function backToHome(){
        setPageToShow("home");
    }
    return(
        <div className="px-4 sm:px-0">
        <h1 className="text-xl font-medium text-amber-400">Name: </h1>
        <h1 className="text-xl font-medium text-amber-400">Email: </h1>
        <h1 className="text-xl font-medium text-amber-400">Phone: </h1>
        <h1 className="text-xl font-medium text-amber-400">Notes: </h1>
        <h1 className="text-xl font-medium text-amber-400">Image: </h1>
        <button onClick={backToHome} class=" m-4 bg-amber-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md"> Edit</button>
        <button onClick={backToHome} class="m-4 bg-amber-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md"> Delete </button>
        <button onClick={backToHome} class=" m-4 bg-amber-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md"> Home </button>
        </div>
    )
}

export default Individual;