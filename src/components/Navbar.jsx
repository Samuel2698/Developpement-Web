import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import Logo from '../assets/SV_3.png' // font: Alex Brush
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10'>
        <div>
          <Link to="work" smooth={true} duration={500}>
          <img src={Logo} alt="Logo 'SV'" style={{width: '130px'}} className='hover:scale-110 duration-500' />
          </Link>
        </div>

        {/* Menu */}
          <ul className='hidden md:flex'>
            <li className='hover:text-white'>
              <Link to="home" smooth={true} duration={500}>
                Accueil
              </Link>
            </li>
            <li className='hover:text-white'>
              <Link to="about" smooth={true} duration={500}>
                A propos de moi
              </Link>
            </li>
            <li className='hover:text-white'>
              <Link to="skills" smooth={true} duration={500}>
                Compétences
              </Link>
            </li>
            <li className='hover:text-white'>
              <Link to="work" smooth={true} duration={500}>
                Projets
              </Link>
            </li>
            <li className='hover:text-white'>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
      
        {/* Hambuerger */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Menu mobile */}
          <ul className={
            !nav 
              ? 'hidden' 
              : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
            }
          >
            <li className='py-6 text-4xl'>
              <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                Accueil
              </Link>
            </li>
            <li className='py-6 text-4xl'>
              <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                A propos de moi
              </Link>
            </li>
            <li className='py-6 text-4xl'>
              <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                Compétences
              </Link>
            </li>
            <li className='py-6 text-4xl'>
              <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                Projets
              </Link>
            </li>
            <li className='py-6 text-4xl'>
              <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a className='flex justify-between items-center w-full text-gray-300'
               href='https://www.linkedin.com/in/samuel-velasco7/'>
                Linkedin <FaLinkedin size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a className='flex justify-between items-center w-full text-gray-300'
               href='https://github.com/'>
                GitHub <FaGithub size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
              <a className='flex justify-between items-center w-full text-gray-300'
               href='https://samuelvelasco2698@gmail.com/'>
                Gmail <HiOutlineMail size={30}/>
              </a>
            </li>
          </ul>
        </div>

    </div>
  )
}

export default Navbar

