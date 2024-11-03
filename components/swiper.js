"use client";

import { useEffect, useRef } from "react";
import Swiper, { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperJS = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Inicialização do Swiper
    swiperRef.current = new Swiper(".swiper-container", {
      spaceBetween: 20,
      slidesPerView: 3,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        // type: "bullets",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      //   grabCursor: true,
      freeMode: false,
    });
  }, []);

};

export default SwiperJS;
