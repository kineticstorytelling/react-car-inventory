import {useState} from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

function Navbar() {
    const [isVisible, setIsVisible] = useState(false)
    
    const dropDown = () =>{
        setIsVisible(!isVisible)
    }

    const clicked = () =>{
        setIsVisible(false)
    }
// set it to where you have to be logged in to see the dashboard button LIKE sql alchemy
    return (
    <nav className= "flex items-center justify-between flex-wrap bg-black">
        <div className="flex items-center flex-shrink-0 text-white mr-6 p-4">
            <Link to='/' className='font-semibold text-xl tracking-tight font-serif'>Car Inv</Link>
        </div>
        <div className="block px-5">
            <button 
                onClick={dropDown}
                className="flex items-center px-3 py-2 text-white 
                border rounded border-white 
                hover:text-indigo-400 hover:border-indigo-400">
                <i className='fas fa-bars'></i>
            </button>
        </div>
        {isVisible ?(
            <div className='w-full block flex-grow items-center'>
                <div className="text-sm lg flex-grow">
                    <Button className="font-serif p-3 m-5 bg-white bg-opacity-80 rounded justify-center">
                        <div>
                            <Link to='/' onClick={clicked} className='flex place-items-center  lg:inline-block lg:mt-0
                            text-black hover:text-white '>
                                Home
                            </Link>
                        </div>
                    </Button>
                    <Button className="p-3 m-5 bg-white bg-opacity-80 rounded justify-center">
                        <div>
                            <Link to='/about' onClick={clicked} className='font-serif flex place-items-center  lg:inline-block lg:mt-0
                            text-black hover:text-white'>
                                About
                            </Link>
                        </div>
                    </Button>
                    <Button className="p-3 m-5 bg-white bg-opacity-80 rounded justify-center">
                        <div>
                            <Link to='/contact' onClick={clicked} className='font-serif flex place-items-center  lg:inline-block lg:mt-0
                            text-black hover:text-white'>
                                Contact
                            </Link>
                        </div>
                    </Button>
                    <Button className="p-3 m-5 bg-white bg-opacity-80 rounded justify-center">
                        <div>
                            <Link to='/dashboard' onClick={clicked} className='font-serif flex place-items-center  lg:inline-block lg:mt-0
                            text-black hover:text-white'>
                                Dashboard
                            </Link>
                        </div>
                    </Button>
                </div>
            </div>
        ): (<></>
        )}
    </nav>  
    )
}

export default Navbar