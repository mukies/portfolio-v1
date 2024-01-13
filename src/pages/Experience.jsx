/** @format */
import react from "../assets/img/react.png";
import redux from "../assets/img/redux.jpg";
import tailwind from "../assets/img/tailwind.jpg";
import html from "../assets/img/html.png";
import node from "../assets/img/node.png";
import express from "../assets/img/express.png";
import bootstrap from "../assets/img/bootstrap.jpg";
import { motion } from "framer-motion";

export default function Experience() {
    const data = [
        {
            id: 1,
            name: "Redux",
            pic: redux
        },
        { id: 2, name: "react", pic: react },
        { id: 3, name: "tailwind", pic: tailwind },
        { id: 4, name: "node", pic: node },
        { id: 5, name: "express", pic: express },
        { id: 6, name: "bootstrap", pic: bootstrap },
        { id: 7, name: "html", pic: html }
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
            name='experience'
            className=' md:h-screen flex justify-center items-center flex-col
            py-10  pt-20 w-full text-white'
        >
            <div className='text-center'>
                <p
                    className='border-b-2 inline-block px-3 text-4xl md:text-5xl
                    mb-5
                font-semibold border-b-gray-500'
                >
                    Experience
                </p>
                <p>these are the technologies i've worked with.</p>
            </div>
            <motion.div
                variants={list}
                initial='hidden'
                whileInView='visible'
                className='grid mx-auto md:mx-10  gap-10 grid-cols-1 md:grid-cols-3'
            >
                {data.map(i => (
                    <motion.div
                        variants={item}
                        key={i.id}
                        className='flex border-b-2 border-b-gray-600 mx-auto rounded-2xl
                        w-3/4 items-center flex-col justify-between
                py-5'
                    >
                        <div className='bg-cover rounded-full h-30 md:h-35 w-auto '>
                            <img
                                className='rounded-lg h-full w-auto'
                                src={i.pic}
                                alt={i.name}
                            />
                        </div>
                        <div className='mt-2 justify-center flex items-center '>
                            <p
                                className='text-lg font-semibold capitalize
                        mt-2'
                            >
                                {i.name}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
