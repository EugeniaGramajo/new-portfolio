"use client"  
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="w-full h-16 text-white rounded-lg shadow bg-stone-900 bg-opacity-90">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center h-16 m-auto space-x-4">
          <ScrollLink className='w-[130px] h-10 ' to="inicio" smooth={true} duration={500}>
            Inicio
          </ScrollLink>
          <ScrollLink className='w-[130px] h-10'  to="proyectos" smooth={true} duration={500}>
            Proyectos
          </ScrollLink>
          <ScrollLink className='w-[130px] h-10'  to="experiencia" smooth={true} duration={500}>
            Experiencia
          </ScrollLink>
          <ScrollLink className='w-[130px] h-10'  to="certificados" smooth={true} duration={500}>
            Certificados
          </ScrollLink>
          <ScrollLink className='w-[130px] h-10'  to="contacto" smooth={true} duration={500}>
            Blog
          </ScrollLink>
          <ScrollLink className='w-[130px] h-10'  to="contacto" smooth={true} duration={500}>
            Contacto
          </ScrollLink>
          <ScrollLink className='w-[130px] h-10'  to="contacto" smooth={true} duration={500}>
            Patio de juegos
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
