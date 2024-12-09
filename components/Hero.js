import Image from "next/image";
import Banner from "../public/Banner001.jpg";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { IoMdHeadset } from "react-icons/io";
import { CiCreditCard1 } from "react-icons/ci";
import { Fullscreen } from "lucide-react";

export default function Hero() {
  return (
    <div>
      <section className="swiper p-5">
        <div className="swiper-wrapper">
          <Image
            className="swiper-slide bg-blue-500 w-full lg:rounded-xl text-5xl text-white flex justify-center items-center"
            src={Banner}
            alt="banner"
          />
        </div>
      </section>

      <div className="border rounded-sm flex flex-col gap-5  md:flex-row flex-wrap justify-around p-7 mx-2 mt-5">
        <span className="flex items-center gap-3">
          <BsFillBoxSeamFill className="text-2xl" />
          Entrega Rápida
        </span>

        <span className="flex items-center gap-3">
          <CiCreditCard1 className="text-3xl" />
          Pagamento Seguro
        </span>
        
        <span className="flex items-center gap-3">
          <IoMdHeadset className="text-2xl" />
          Suporte 24H
        </span>
      </div> 
    </div>
  );
}
