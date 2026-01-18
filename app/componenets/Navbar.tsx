"use client";



import { useState } from "react";

import { Menu, X } from "lucide-react";



const navLinks = [

  { name: "Home", id: "home" },

  { name: "About", id: "about" },

  { name: "Experience", id: "experience" },

  { name: "Projects", id: "projects" },

  { name: "Services", id: "services" },

  { name: "Contact", id: "contact" },

];





export default function Navbar() {

  const [open, setOpen] = useState(false);



  const scrollToSection = (id: string) => {

    const section = document.getElementById(id);

    section?.scrollIntoView({ behavior: "smooth" });

    setOpen(false);

  };



  return (

    <header className="fixed top-0 left-0 w-full z-50 bg-[#050505] text-white border-b border-gray-800">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

       

        {/* LOGO */}

        <div

          onClick={() => scrollToSection("home")}

          className="text-xl font-bold tracking-wide cursor-pointer"

        >

          DUYI CODE

        </div>



        {/* DESKTOP NAV */}

        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">

          {navLinks.map((link) => (

            <button

              key={link.name}

              onClick={() => scrollToSection(link.id)}

              className="uppercase hover:text-gray-300 transition"

            >

              {link.name}

            </button>

          ))}

        </nav>



        {/* MOBILE BUTTON */}

        <button

          onClick={() => setOpen(!open)}

          className="md:hidden text-white"

          aria-label="Toggle Menu"

        >

          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}

        </button>

      </div>



      {/* MOBILE MENU */}

      {open && (

        <div className="md:hidden bg-[#050505] border-t border-gray-800">

          <nav className="flex flex-col px-6 py-6 gap-6 text-sm font-medium">

            {navLinks.map((link) => (

              <button

                key={link.name}

                onClick={() => scrollToSection(link.id)}

                className="text-left hover:text-gray-300 transition"

              >

                {link.name}

              </button>

            ))}

          </nav>

        </div>

      )}

    </header>

  );

}