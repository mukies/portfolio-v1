/** @format */
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
export default function Social() {
    const links = [
        {
            id: 1,

            child: (
                <>
                    Linkedin <IoLogoLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/mukesh-bhattarai-720238157?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
            id: 2,

            child: (
                <>
                    Mail <BiLogoGmail size={30} />{" "}
                </>
            ),
            href: "mailto:muk.yess@gmail.com"
        },
        {
            id: 3,

            child: (
                <>
                    Facebook <FaFacebookSquare size={30} />
                </>
            ),
            href: "https://www.facebook.com/mukesh.bhattarai.75"
        },
        {
            id: 4,

            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/mukies"
        }
    ];
    return (
        <div className='fixed  top-[50%] scale-[90%]  left-0'>
            <ui className='md:scale-110 '>
                {links.map(i => (
                    <li
                        key={i.id}
                        className=' ml-[-90px] hover:ml-[0px] hidden md:flex
                        justify-between text-center rounded-lg
                        my-1 duration-500 w-[130px] bg-gray-500 flex
                 '
                    >
                        <a
                            className='w-full gap-x-1.5 flex px-2 duration-500 hover:text-white font-bold py-2
                        justify-between items-center'
                            href={i.href}
                            target='_blank'
                            rel='noreferrer'
                        >
                            {i.child}
                        </a>
                    </li>
                ))}
            </ui>
        </div>
    );
}
