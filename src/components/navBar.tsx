"use client"  
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="w-full h-16 text-white rounded-lg shadow bg-stone-900 bg-opacity-90">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center h-16 m-auto space-x-4">
        <Link className='w-[130px] h-10' href={"/"}>Inicio</Link>
<Link className='w-[130px] h-10' href={"/projects"}>Proyectos</Link>
<Link className='w-[130px] h-10' href={"/experience"}>Experiencia</Link>
<Link className='w-[130px] h-10' href={"/certificate"}>Certificados</Link>
<Link className='w-[130px] h-10' href={"/blog"}>Blog</Link>
<Link className='w-[130px] h-10' href={"/contact"}>Contacto</Link>
<Link className='w-[130px] h-10' href={"/games"}>Patio de juegos</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
