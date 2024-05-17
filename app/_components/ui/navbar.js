"use client"

import Image from "next/image";

export default function NavBar() {

    return (
        <nav className="flex items-center justify-between bg-blue-400 h-12">
            <div className="flex mx-8 text-white font-bold items-center gap-x-4 sm:mx-2">
                <Image src="/FPD.svg" height={40} width={40} />
                <span className="sm:text-sm">Frigs Pica Dulces</span>
            </div>
            <div className="flex gap-x-4 mx-10 text-white font-bold sm:text-xs sm:mx-4">
                <div className="hover:text-gray-200 hover:cursor-pointer">
                        Home
                </div>
                <div className="hover:text-gray-200 hover:cursor-pointer">
                        <button onClick={() => {
                            const element = document.getElementById('menu');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            } else {
                                console.error('Element with id "menu" not found');
                            }
                        }}>Menu</button>
                </div>
                <div className="hover:text-gray-200 hover:cursor-pointer">
                <button onClick={() => {
                            const element = document.getElementById('contact');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            } else {
                                console.error('Element with id "menu" not found');
                            }
                        }}>Contact</button>
                </div>
            </div>
        </nav>
    )
}