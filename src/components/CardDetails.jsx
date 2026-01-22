import Dropdown from "./Dropdown"
import {useState, useEffect} from "react"


function CardDetails() {
    // const [SelectedPokemonUrl, setSelectedPokemonUrl] = useState();
    // const [Details, setDetails] = useState();

    // function getFromLocalStorage() {
    //     setSelectedPokemonUrl(localStorage.getItem("url"));
    // }

    // getFromLocalStorage();

    // useEffect(() => {
    //     const fetchMoreDetailes = async() => {
    //         try{
    //             const response = await fetch(SelectedPokemonUrl);
    //             const result = await response.json();

    //             setDetails(result);
    //         } catch(err){
    //             console.error("This is more detailed error")
    //         }
    //     }
    // },[])


    return (
        <>
            <div className="mx-[30px] mt-[40px] mb-[40px]">
                {/* Top section */}
                <div className="w-[55%]">
                    <h1 className="w-[40%] text-PurpleGrey">Search for a Pokemon by name or using its National Pokedex number.</h1>
                    <div className='flex mt-[15px]'>
                        <div className='bg-gray-200 w-[30px] h-[40px] flex items-center justify-center rounded-l-md'>
                            <span
                                class="material-symbols-outlined">
                                search
                            </span>
                        </div>
                        <input
                            className='text-PurpleGrey w-[27%] focus:outline-none h-[40px] bg-gray-200 rounded-r-md'
                            type="search"
                            placeholder='Name or number'
                        />
                        <Dropdown></Dropdown>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="w-[95vw] border-2 border-PurpleGrey h-[100vh] rounded-2xl">
                    <div className="w-[45%] ml-[20px] mt-[30px]">
                        <div>
                            <div>
                                <h1>index number</h1>
                            </div>
                            <div className="flex justify-between">
                                <h1>pokemon name</h1>
                                <div className="flex">
                                    <h1>type 1</h1>
                                    <h1>type 2</h1>
                                </div>
                            </div>
                        </div>
                        <div className="w-[45%] h-[80%] rounded-2xl bg-blue-200 mt-[20px] ml-[20px]">

                        </div>
                    </div>

                    <div>

                    </div>


                </div>
            </div>
        </>
    )
}

export default CardDetails