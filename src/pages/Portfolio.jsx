/** @format */
import ecommerce from "../assets/ecommerce.jpg";
import scroll from "../assets/scroll.jpg";
import mern from "../assets/mern.png";
import para from "../assets/para.jpg";
import img from "../assets/img.jpg";
import nav from "../assets/nav.jpeg";
import { motion } from "framer-motion";

export default function Portfolio() {
    const data = [
        {
            id: 1,
            pic: "https://res.cloudinary.com/practicaldev/image/fetch/s--rCjQOckX--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8ylxpg8dsaos9a1flawq.png",
            name: "Chat App"
        },
        {
            id: 2,
            pic: ecommerce,
            name: "e-commerce website"
        },
        {
            id: 3,
            pic: "https://store-images.s-microsoft.com/image/apps.16934.9007199266535064.4b146cde-f051-428c-88ff-a907f6812d99.1fdfde8f-16e9-4ab4-bbaa-f4e7b360db0b",
            name: "recipe app"
        },
        { id: 4, pic: img, name: "personal portfolio" },
        { id: 5, pic: nav, name: "nav" },
        { id: 6, pic: para, name: "weather" }
    ];

    const list = {
        visible: {
            opacity: 1,
            type: "spring",
            stiffness: 350,
            damping: 20,

            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.2
            }
        },
        hidden: { opacity: 0 }
    };

    const item = {
        visible: {
            opacity: 1,
            x: 0
        },
        hidden: { opacity: 0, x: -300 }
    };

    return (
        <div
            name='portfolio'
            className=' md:h-screen flex justify-center items-center
                flex-col w-full py-20 md:py-0 mb-10  px-5 text-white '
        >
            <div className='text-white text-center mb-10'>
                <p
                    className='md:text-[40px] text-3xl inline-block px-2 mb-4
                md:border-b-2 border-b-[2px] border-b-gray-400 font-bold'
                >
                    Portfolio.
                </p>
                <p>Have a look at some of my projects</p>
            </div>
            <motion.div
                variants={list}
                initial='hidden'
                whileInView='visible'
                className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5'
            >
                {data.map(i => (
                    <motion.div
                        variants={item}
                        className=' mx-2 bg-gray-800 shadow-slate-500 shadow-md
                   flex flex-col justify-between  rounded-lg '
                    >
                        <div className='h-2/3'>
                            <img
                                className='hover:scale-105 object-cover duration-500 w-full
                            h-full rounded-lg'
                                src={i.pic}
                                alt={i.name}
                            />
                        </div>
                        <div className='flex justify-between flex-col  py-2 w-full'>
                            <p
                                className='text-lg font-semibold mb-2 text-center capitalize
                        mt-2'
                            >
                                {i.name}
                            </p>
                            <div className='flex mx-auto justify-between'>
                                <button
                                    className='px-10 hover:scale-110 duration-500
                             py-2 bg-blue-900 mb-2 rounded-lg '
                                >
                                    view code
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
