import Image from "next/image";
import iPhone16P from "../public/iPhone16Pro.png";
import iPhone16 from "../public/iPhone16.png";
import iPhone15 from "../public/iPhone15.png";
import iPhone14 from "../public/iPhone14.png";

import S24ultra from "../public/S24ultra.png"
import S24 from "../public/S24.png"
import S23ultra from "../public/S23ultra.png"
import S23 from "../public/S23.png"

// import SwiperJS from "@/components/swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SwiperJS from "@/components/swiper";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab);

export default function Home() {
  return (
    <>
      <span className="hidden bg-[#f5f5f5] lg:block text-gray-400 p-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <h1>Bem-vindos a Smartify Store.</h1>

          <div className="flex gap-2 items-center">
            <p className="flex gap-2 items-center pr-5 border-r-2 border-r-gray-200">
              <FontAwesomeIcon
                icon="fa-solid fa-location-dot"
                className="w-3"
              />
              Deliver 56342
            </p>
            <p className="flex gap-2 items-center pl-5">
              <FontAwesomeIcon icon="fa-solid fa-truck-fast" className="w-5" />
              Frete Grátis
            </p>
          </div>
        </div>
      </span>

      <header className="max-w-screen-xl mx-auto flex justify-between items-center gap-2 p-5">
        <h1 className="text-2xl text-blue-500 font-bold">Smartify</h1>

        <div className="hidden bg-gray-100 border border-gray-200 max-w-md w-full sm:flex gap-2 px-6 py-2 rounded-full">
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

        <ul className="flex gap-5">
          <li className="flex gap-2 items-center cursor-pointer">
            <FontAwesomeIcon
              icon="fa-solid fa-user"
              className="w-4 text-blue-500"
            />
            <span className="hidden lg:block">Entrar</span>
          </li>

          <dli className="flex gap-2 items-center cursor-pointer">
            <FontAwesomeIcon
              icon="fa-solid fa-cart-shopping"
              className="w-5 text-blue-500"
            />
            <span className="hidden lg:block">Carrinho</span>
          </dli>
        </ul>
      </header>

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
        </ul>
      </nav>

      <hr />

      <main className="max-w-screen-xl mx-auto">
        <section className="p-5">
          <div className="bg-blue-500 w-full rounded-2xl h-96 text-5xl text-white flex justify-center items-center">
            Banner
          </div>
        </section>

        <section className="p-5">
          <h2 className="border-b-4 border-b-blue-500 text-2xl font-medium w-72">
            Celulares <span className="text-blue-500">Mais vendidos</span>
          </h2>
        </section>

        <section className="p-5 overflow-hidden">
          <h2 className="border-b-4 border-b-blue-500 text-2xl font-medium w-72">
            Samsung
          </h2>

          <div className="swiper-container mt-10">
            <div className="swiper-wrapper w-full relative">
              {/* Aqui estão alguns slides de exemplo */}

              <div className="swiper-slide border rounded-xl max-w-80">
                <div className=" bg-gray-100 p-5 ">
                  <Image src={S24ultra} alt="S24ultra" />
                </div>

                <div className="p-3">
                  <h3>Samsung S24 Ultra</h3>
                  <span className="text-sm text-blue-500 font-semibold">
                    R$ 8.000,00
                  </span>
                </div>
              </div>

              <div className="swiper-slide border rounded-xl max-w-80">
                <div className=" bg-gray-100 p-5 ">
                  <Image src={S24} alt="S24" />
                </div>
                <div className="p-3">
                  <h3>Samsung S24</h3>
                  <span className="text-sm text-blue-500 font-semibold">
                    R$ 6.500,00
                  </span>
                </div>
              </div>
              <div className="swiper-slide  border rounded-xl max-w-80">
                <div className=" bg-gray-100 p-5 ">
                  <Image src={S23ultra} alt="S23ultra" />
                </div>

                <div className="p-3">
                  <h3>Samsung S23 ultra</h3>
                  <span className="text-sm text-blue-500 font-semibold">
                    R$ 5.000,00
                  </span>
                </div>
              </div>

              <div className="swiper-slide border rounded-xl max-w-80">
                <div className=" bg-gray-100 p-5 ">
                  <Image src={S23} alt="S23" />
                </div>

                <div className="p-3">
                  <h3>Samsung S23</h3>
                  <span className="text-sm text-blue-500 font-semibold">
                    R$ 4.000,00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-5 overflow-hidden">
          <h2 className="border-b-4 border-b-blue-500 text-2xl font-medium w-72">
            iPhone
          </h2>

          <div className="swiper-container mt-10">
            <div className="swiper-wrapper w-full relative">
              {/* Aqui estão alguns slides de exemplo */}

              <div className="swiper-slide border rounded-xl max-w-80">
                <div className=" bg-gray-100 p-5 ">
                  <Image src={iPhone16P} alt="iPhone" />
                </div>

                <div className="p-3">
                  <h3>iPhone 16 Pro</h3>
                  <span className="text-sm text-blue-500 font-semibold">
                    R$ 8.000,00
                  </span>
                </div>
              </div>

              <div className="swiper-slide border rounded-xl max-w-80">
                <div className=" bg-gray-100 p-5 ">
                  <Image src={iPhone16} alt="iPhone" />
                </div>
                <div className="p-3">
                  <h3>iPhone 16</h3>
                  <span className="text-sm text-blue-500 font-semibold">
                    R$ 6.500,00
                  </span>
                </div>
              </div>
              <div className="swiper-slide  border rounded-xl max-w-80">
                <div className=" bg-gray-100 p-5 ">
                  <Image src={iPhone15} alt="iPhone" />
                </div>

                <div className="p-3">
                  <h3>iPhone 15</h3>
                  <span className="text-sm text-blue-500 font-semibold">
                    R$ 5.000,00
                  </span>
                </div>
              </div>

              <div className="swiper-slide border rounded-xl max-w-80">
                <div className=" bg-gray-100 p-5 ">
                  <Image src={iPhone14} alt="iPhone" />
                </div>

                <div className="p-3">
                  <h3>iPhone 14</h3>
                  <span className="text-sm text-blue-500 font-semibold">
                    R$ 4.000,00
                  </span>
                </div>
              </div>
            </div>
          </div>
          <SwiperJS />
        </section>
      </main>
    </>
  );
}
