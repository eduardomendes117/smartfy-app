"use client";

import { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function SwiperJS() {
  useEffect(() => {
    // Inicializando o Swiper quando o componente for montado
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 3, // Quantidade de produtos visíveis por vez
      spaceBetween: 30, // Espaço entre os cards
      loop: false, // Habilitar loop de rolagem infinita
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        // Ajuste da quantidade de slides visíveis conforme a tela diminui
        1024: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 1,
        },
      },
    });

    return () => swiper.destroy();
  }, []);
}
