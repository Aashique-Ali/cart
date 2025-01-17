import React, { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

const Menu = () => {
  const [nav, setNav] = useState(false)

  return (
    <div className=" bg-green-600 sticky top-0 z-10 mb-10 flex justify-between items-center mx-auto px-8 text-white h-20">
      <h1 className="font-bold text-2xl">Logo</h1>
      <ul className="hidden md:flex gap-4">
        <li className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
          Home
        </li>
        <li className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
          About
        </li>
        <li className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
          Services
        </li>
        <li className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
          Contact
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="block md:hidden cursor-pointer"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed md:hidden right-0 top-[13%] border border-slate-400 w-[60%] h-full bg-green-600 ease-in-out duration-500"
            : "w-[60%] fixed top-[10%] bottom-0 right-[-100%] ease-in-out duration-500"
        }
      >
        <li className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
          Home
        </li>
        <li className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
          About
        </li>
        <li className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
          Services
        </li>
        <li className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
          Contact
        </li>
      </ul>
    </div>
  )
}

export default Menu
