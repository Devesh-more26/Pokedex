import { useRef, useState } from 'react'
import Tune from '../assets/images/Tune.png'


function Dropdown({StartAndEnd}) {

    const [showOptions, setShowOptions] = useState(false);


    return (
        <div className="ml-[20px]">
            <button
                className="inline-flex cursor-pointer w-[40px] h-[40px] justify-center gap-x-1.5 rounded-md bg-PurpleGrey text-sm font-semibold shadow-xs inset-ring-1 inset-ring-gray-300"
                onClick={() => {
                    setShowOptions(!showOptions);
                }}
            >
                <img src={Tune} alt="" />
            </button>

            {
                showOptions ? (<div
                    className='absolute rounded-md bg-white shadow-lg outline-1 outline-black/5 transition'
                >
                    <div className="py-1 w-[150px]">
                        <div>
                            <p
                                className=" px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 "
                                onClick={() => StartAndEnd(0,151)}
                            >
                                Kanto
                            </p>
                        </div>

                        <div>
                            <p
                                className=" px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                                onClick={() => StartAndEnd(151,251)}
                            >
                                Jhoto
                            </p>
                        </div>

                        <div>
                            <p
                                className=" px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                                onClick={() => StartAndEnd(251,386)}
                            >
                                Hoenn
                            </p>
                        </div>

                        <div>
                            <p
                                className=" px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                                onClick={() => StartAndEnd(386,493)}
                            >
                                Sinnoh
                            </p>
                        </div>

                    </div>

                </div>) : ""
            }

        </div>
    )
}
export default Dropdown