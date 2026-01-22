import {useState, useEffect} from "react"
import Dropdown from "./Dropdown"
import Display from "./Display"

function MainSection() {

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(151);


    const handleDataChange = (first, second) => {
        setStart(first);
        setEnd(second);
    }


    return (
        <>
            {/* Main Section Header*/}
            <div className='mt-[20px]'>
                <h1 className='text-center text-[40px] font-bold text-violet-950'>Pokedex</h1>
                <p className='text-center text-[18px] text-PurpleGrey'>Search for a Pokemon by name or using its National Pokedex number</p>
                <div className='flex justify-center mt-[15px]'>
                    <div className='bg-gray-200 w-[30px] h-[40px] flex items-center justify-center rounded-l-xl'>
                        <span
                            class="material-symbols-outlined">
                            search
                        </span>
                    </div>
                    <input
                        className='text-PurpleGrey w-[40%] focus:outline-none h-[40px] bg-gray-200 rounded-r-xl'
                        type="search"
                        placeholder='Name or number'
                    />

                    <Dropdown StartAndEnd={handleDataChange}></Dropdown>
                </div>
            </div>

            {/* Main Section Cards */}
            <div className='w-full flex justify-center mt-[30px]'>
                <div className='w-[90%] border-2 border-PurpleGrey rounded-xl pt-[10px] pr-[5px] pl-[5px] mb-[30px]'>
                    <Display start={start} end={end}></Display>
                </div>
            </div>
        </>
    )
}

export default MainSection