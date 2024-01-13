/** @format */
import { motion } from "framer-motion";

function About() {
    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{
                type: "spring",
                stiffness: 320,
                damping: 20,
                x: 0,
                opacity: 1
            }}
            transition={{
                duration: 0.7,
                delay: 0.3
            }}
            name='about'
            className='h-screen  flex justify-center item-center
            pb-24 mx-auto text-white'
        >
            <div
                className='md:max-w-2xl h-full flex gap-y-10 flex-col
            justify-center mt-[100px] '
            >
                <h1 className='md:text-[50px] text-center text-4xl font-bold'>
                    About Me.
                </h1>
                <p className='text-[12px] text-center md:text-xl text-gray-400 mx-auto w-[250px] md:w-full '>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit veniam vero saepe nulla possimus non eveniet
                    minima omnis perspiciatis! Culpa officiis molestias incidunt
                    perspiciatis numquam sunt dolore itaque autem deserunt
                    illum, magnam nihil ad? Minima animi adipisci labore error
                    consequuntur, nobis. Odit optio quasi amet repudiandae nisi,
                    dolores nostrum. Nulla!
                </p>
            </div>
        </motion.div>
    );
}

export default About;
