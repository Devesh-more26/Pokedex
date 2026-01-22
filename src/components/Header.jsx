import Pokeball from "../assets/images/Pokeball.png"
import usericon from "../assets/images/user.png"

function Header() {
    return (
        <>
            <div className='bg-PurpleGrey h-[45px] w-full flex justify-between items-center'>
                <div className='w-[300px] flex justify-center'>
                    <img
                        className='h-[40px] w-[40px] rounded-[50px] bg-white '
                        src={Pokeball} alt="" />
                </div>

                <div className='w-[300px] flex justify-center'>
                    <img
                        className='w-[35px] h-[35px]'
                        src={usericon} alt="" />
                </div>
            </div>
        </>
    )
}

export default Header