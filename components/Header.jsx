/**
 * @copyright 2024 John Lin
 * @license Apache-2.0
 */

const Header = () => {
    return (
        <header
            className="fixed top-0 left-0 w-full h-20 flex items-center
            z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">

            <div
                className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6
            md:grid md:grid-cols-[1fr, 3fr, 1fr]">
                <h1>
                    <a href="/" className="logo">
                        <img src="images\logo.svg" width={40} height={40} alt="John Lin"/>
                    </a>
                </h1>

                <div className="">
                    <a href="/" className="logo">
                        <img src="images\hamburger.svg" width={40} height={40} alt="hamburger"/>
                    </a>

                    navbar
                    <a href="#contact" className="">Contact Me</a>
                </div>

            </div>

        </header>
    )
}

export default Header