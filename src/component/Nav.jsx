/** @format */
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Nav() {
    const [menu, setMenu] = useState(false);
    const link = [
        { id: 1, name: "home", link: "home" },
        { id: 2, name: "about", link: "about" },
        { id: 3, name: "portfolio", link: "portfolio" },
        { id: 4, name: "experience", link: "experience" },
        { id: 5, name: "contact", link: "contact" }
    ];
    return (
        <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{
                x: 0,
                opacity: 1
            }}
            transition={{
                duration: .8,
                delay: 0.2
            }}
            className='flex z-10 top-4 px-10  fixed justify-between items-center
            text-center text-white
        bg-black h-[60px]  md:h-40 border-2 md:border-[8px] border-gray-600 rounded-full w-full'
        >
            <h1 className='font-signature md:scale-150 text-4xl '>Mukesh</h1>
            <ul className='md:flex hidden md:scale-110 '>
                {link.map(({ id, name, link }) => (
                    <li
                        key={id}
                        className='px-4 text-xl capitalize py-2 cursor-pointer  duration-500 hover:bg-white
                        hover:scale-110 hover:font-bold rounded-2xl
                    hover:text-black'
                    >
                        <Link
                            onClick={() => setMenu(false)}
                            to={link}
                            duration={500}
                            smooth={true}
                        >
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
            <div
                onClick={() => setMenu(!menu)}
                className='md:hidden   text-gray-400 
           '
            >
                {!menu ? <FaBars size={30} /> : <FaTimes size={30} />}
            </div>

            <ul
                className={
                    !menu
                        ? "top-[-125%]  left-[-125%]  duration-700 absolute"
                        : "flex top-[65px] right-0 pb-5  bg-gray-700 flex-col text-center justify-center duration-700  items-center rounded-3xl absolute left-0  text-white "
                }
            >
                {link.map(({ id, name, link }) => (
                    <li
                        key={id}
                        className='py-2 px-4 scale-110 my-4 text-[15px] border-b-[1px]
                            border-b-gray-400 transition-all rounded-md 
                             hover:font-semibold
                            hover:bg-white hover:text-black
                    hover:scale-105 duration-300 '
                    >
                        <Link
                            onClick={() => setMenu(false)}
                            to={link}
                            duration={500}
                            smooth={true}
                        >
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}
