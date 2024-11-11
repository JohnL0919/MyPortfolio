/**
 * @copyright 2024 John Lin
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { useState } from "react"

/**
 * Components
 */
import Navbar from "./Navbar"

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
<header className="fixed top-0 left-0 w-full h-20 flex items-center 
    z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
    
    <div className="w-full px-4 flex justify-between items-center">
                
                <h1>
                    <a href="/" className="logo">
                        <img src="images\logo.svg" width={40} height={40} alt="John Lin"/>
                    </a>
                </h1>

                <div className="relative md:justify-self-center ">
                    <button 
                        className=" md:hidden menu-btn menu-btn"
                        onClick={ () => setNavOpen((prev) => !prev) }
                    >
                        <span className="material-symbols-rounded">
                            {navOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                    <Navbar navOpen={navOpen}/>
                </div>

                <div className="hidden md:block">
                    <a href="#contact" className="btn btn-secondary md:justify-self-end">
                        Contact Me
                    </a>
                </div>
                
                
            </div>
        </header>
    )
}

export default Header

