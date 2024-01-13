/** @format */
import img2 from "../assets/img2.jpg";
import img1 from "../assets/img1.jpg";
import img3 from "../assets/img3.jpg";
import { FaArrowRight } from "react-icons/fa6";
import Social from "../component/Social.jsx";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{
                x: 0,
                opacity: 1
            }}
            transition={{
                duration: 1,
                delay: 0.2
            }}
            name='home'
            className=' w-screen  flex justify-center  items-center scale-[90%]
                h-screen'
        >
            <div
                className='flex max-w-screen-lg md:mt-fit mt-[250px] my-10
                scale-[80%] md:scale-100 flex flex-col
                justify-center
                md:justify-around items-center mx-auto px-4
            md:flex-row '
            >
                <div
                    className='flex flex-col mt-32 text-center justify-center
                     items-center
                md:min-w-[28rem]  '
                >
                    <h2 className='md:text-4xl text-[40px]  text-white font-bold md:font-bold  '>
                        I'm a Full Stack Web Developer
                    </h2>
                    <p className='text-gray-400 md:text-[17px] text-[16px] my-5'>
                        {" "}
                        I have 8 years of experience building and designing
                        websites. Currently, I love to work on web applications
                        using technologies like React, Tailwind, Next js and
                        GraphQl.
                    </p>
                    <div className='my-10'>
                        <button
                            className='px-3 group md:scale-150 py-2 bg-gradient-to-r
                        from-blue-700 flex font-semibold text-white items-center
                        to-blue-400 md:hover:scale-[175%] rounded-2xl
                        hover:scale-110 duration-500'
                        >
                            <Link
                                className='flex justify-center items-center'
                                to='portfolio'
                                smooth={true}
                                duration={500}
                            >
                                Portfolio
                                <span className=' group-hover:rotate-90 duration-500 ml-2'>
                                    <FaArrowRight />
                                </span>
                            </Link>
                        </button>
                    </div>
                </div>
                <div className='h-[70vh] mt-20 md:mt-0 md:h-auto'>
                    <img
                        className=' border-gray-600 border-4 scale-125
                        rounded-[30px] md:scale-90
                        mx-auto w-2/3 lg:w-full'
                        src={img2}
                        alt='hero'
                    />
                </div>
            </div>
        </motion.div>
    );
}
