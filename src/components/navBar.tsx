"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full h-16 text-white rounded-lg shadow bg-stone-900 bg-opacity-90">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center h-16 m-auto space-x-4 text-center">
          <Link
            className="w-[130px] h-10 text-center items-center flex justify-center"
            href={"/"}
          >
            Inicio
          </Link>
          <Link
            className="w-[130px] h-10 text-center items-center flex justify-center"
            href={"/projects"}
          >
            Proyectos
          </Link>
          <Link
            className="w-[130px] h-10 text-center items-center flex justify-center"
            href={"/experience"}
          >
            Experiencia
          </Link>
          <Link
            className="w-[130px] h-10 text-center items-center flex justify-center"
            href={"/certificate"}
          >
            Certificados
          </Link>
          <Link
            className="w-[130px] h-10 text-center items-center flex justify-center"
            href={"/blog"}
          >
            Blog
          </Link>
          <Link
            className="w-[130px] h-10 text-center items-center flex justify-center"
            href={"/contact"}
          >
            Contacto
          </Link>
          <Link
            className="w-[130px] h-10 text-center items-center flex justify-center"
            href={"/games"}
          >
            Patio de juegos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
