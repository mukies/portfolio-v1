/** @format */
import { motion } from "framer-motion";
export default function Contact() {
    return (
        <motion.section
            initial={{ x: -100, opacity: 0 }}
            whileInView={{
                type: "spring",
                stiffness: 320,
                damping: 20,
                x: 0,
                opacity: 1
            }}
            transition={{
                duration: 0.6,
                delay: 0.2
            }}
            name='contact'
            className='text-gray-600 md:h-screen body-font flex
            justify-center items-center relative'
        >
            <div className='container px-5 py-24 mx-auto'>
                <div className='flex flex-col md:scale-125 text-center w-full mb-12'>
                    <h1
                        className='sm:text-3xl text-2xl font-medium title-font
                    mb-4 text-white'
                    >
                        Contact Us
                    </h1>
                    <p className='lg:w-2/3 mx-auto leading-relaxed text-white text-base'>
                        Feel free to contact me.
                    </p>
                </div>
                <div className='lg:w-1/2 md:scale-125 md:w-2/3 mx-auto'>
                    <form
                        action='https://getform.io/f/461bbc53-ce30-4f16-830a-a123a70fb635'
                        method='POST'
                    >
                        <div className='flex flex-wrap -m-2'>
                            <div className='p-2 w-1/2'>
                                <div className='relative'>
                                    <label
                                        for='name'
                                        className='leading-7 text-sm text-white'
                                    >
                                        Name
                                    </label>
                                    <input
                                        type='text'
                                        id='name'
                                        name='name'
                                        className='w-full
            bg-gray-100 bg-opacity-50 rounded border border-gray-300
            focus:border-indigo-500 focus:bg-white focus:ring-2
            focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3
            leading-8 transition-colors duration-200 ease-in-out'
                                    />
                                </div>
                            </div>
                            <div className='p-2 w-1/2'>
                                <div className='relative'>
                                    <label
                                        for='email'
                                        className='leading-7 text-sm text-white'
                                    >
                                        Email
                                    </label>
                                    <input
                                        type='email'
                                        id='email'
                                        name='email'
                                        className='w-full
            bg-gray-100 bg-opacity-50 rounded border border-gray-300
            focus:border-indigo-500 focus:bg-white focus:ring-2
            focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3
            leading-8 transition-colors duration-200 ease-in-out'
                                    />
                                </div>
                            </div>
                            <div className='p-2 w-full'>
                                <div className='relative'>
                                    <label
                                        for='message'
                                        className='leading-7 text-sm text-white'
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id='message'
                                        name='message'
                                        className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                                    ></textarea>
                                </div>
                            </div>
                            <div className='p-2 w-full'>
                                <button
                                    type='submit'
                                    className='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </motion.section>
    );
}
