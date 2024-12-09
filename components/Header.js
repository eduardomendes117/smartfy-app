import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab);

export default function Header() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSamsungOpen, setIsSamsungOpen] = useState(false);
  const [isIphoneOpen, setIsIphoneOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);

  return (
    <div>
      <div className="bg-blue-500 w-full">
        <header className="max-w-screen-xl text-white mx-auto flex justify-between items-center gap-2 p-5">
          <h1 className="text-2xl font-bold">Smartify</h1>
          <div className="hidden bg-gray-100 border border-gray-200 max-w-md w-full sm:flex items-center gap-2 px-6 py-2 rounded-full">
            <FontAwesomeIcon
              icon="fa-solid fa-magnifying-glass"
              className="w-4 text-blue-500"
            />
            <input
              className="focus-visible:outline-none px-1 bg-transparent w-full placeholder:text-sm text-black"
              type="search"
              placeholder="O que você está procurando?"
            />
          </div>
          <ul className="flex gap-5">
            <li className="flex gap-2 items-center cursor-pointer">
              <FontAwesomeIcon
                icon="fa-solid fa-user"
                className="w-4"
              />
              <span className="hidden lg:block">Entrar</span>
            </li>
            <li className="flex gap-2 items-center cursor-pointer">
              <FontAwesomeIcon
                icon="fa-solid fa-cart-shopping"
                className="w-5"
              />
              <span className="hidden lg:block">Carrinho ({cartItems})</span>
            </li>
          </ul>
        </header>
      </div>

      <nav className="max-w-screen-xl mx-auto items-center p-4">
        <div className="sm:hidden bg-gray-100 border border-gray-200 max-w-md w-full flex gap-2 px-6 py-2 rounded-full">
          <FontAwesomeIcon
            icon="fa-solid fa-magnifying-glass"
            className="w-4"
          />
          <input
            className="focus-visible:outline-none px-1 bg-transparent w-full placeholder:text-sm"
            type="search"
            placeholder="O que você está procurando?"
          />
        </div>
        <ul className="hidden lg:flex gap-5 items-center">
          <a
            href="#"
            className="bg-blue-400 text-white font-medium px-3 py-2 rounded-full"
          >
            Todos os celulares
            <FontAwesomeIcon
              icon="fa-solid fa-chevron-down"
              className="w-4 ml-2 inline"
            />
          </a>

          <div
            className="relative"
            onMouseEnter={() => setIsSamsungOpen(true)}
            onMouseLeave={() => setIsSamsungOpen(false)}
          >
            <a
              href="#"
              className="bg-gray-100 font-medium px-3 py-2 rounded-full"
            >
              Samsung
              <FontAwesomeIcon
                icon="fa-solid fa-chevron-down"
                className="w-4 ml-2 inline text-blue-500"
              />
            </a>
            {isSamsungOpen && (
              <div className="absolute bg-white shadow-lg border rounded-lg mt-2 w-48">
                <ul className="text-gray-800">
                  <li className="px-4 py-2 hover:bg-gray-200">Galaxy S23</li>
                  <li className="px-4 py-2 hover:bg-gray-200">Galaxy Z Fold 4</li>
                  <li className="px-4 py-2 hover:bg-gray-200">Galaxy A54</li>
                </ul>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setIsIphoneOpen(true)}
            onMouseLeave={() => setIsIphoneOpen(false)}
          >
            <a
              href="#"
              className="bg-gray-100 font-medium px-3 py-2 rounded-full"
            >
              iPhone
              <FontAwesomeIcon
                icon="fa-solid fa-chevron-down"
                className="w-4 ml-2 inline text-blue-500"
              />
            </a>
            {isIphoneOpen && (
              <div className="absolute bg-white shadow-lg border rounded-lg mt-2 w-48">
                <ul className="text-gray-800">
                  <li className="px-4 py-2 hover:bg-gray-200">iPhone 13</li>
                  <li className="px-4 py-2 hover:bg-gray-200">iPhone 14</li>
                  <li className="px-4 py-2 hover:bg-gray-200">iPhone SE</li>
                </ul>
              </div>
            )}
          </div>
        </ul>
      </nav>

      <hr />
    </div>
  );
}
