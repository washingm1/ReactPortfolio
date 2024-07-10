
import {Menu, X} from "lucide-react"
import { useState } from "react";
import '../Styling/Nav.css'
function NavHashLinks() {
    return (
        <>
            <a href="#headerPage">Home</a>
            <a href="#aboutPage">About Me</a>
            <a href="#portfolioPage">Portfolio</a>
            <a href="#skillsPage">Skills & Experience</a>
        </>
    );
};

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavBar = () => {
            setIsOpen(!isOpen);
    };

    return (
        <>
            <nav id="navbar" className="sticky top-0 right-0 left-0 z-[99] mx-auto flex w-full flex-wrap text-center">
                <div className=" hidden justify-between md:flex">
                    <NavHashLinks />
                </div>
                <div className="md:hidden">
                <button className="p-5" onClick={toggleNavBar}>
                    {isOpen ? <X /> : <Menu />}
                </button>
                </div>
                {isOpen && (
                <div className="flex  flex-col  items-center basis-full">
                    <NavHashLinks />
                </div>
            )}
            </nav>
      
        </>
    );
}

export default Nav;

