

function Newcontact(){
    return(
        <div
        class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-red-900 sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
            <img
                class="rounded-t-lg"
                src= "./src/images/zenitsu.jpeg"
                alt="zenitsu" 
                />
            </a>
            <div class="p-6">
                <h5
                    class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Zenitsu Agatsuma
                </h5>
            </div>
        </div>
    )
}

export default Newcontact;