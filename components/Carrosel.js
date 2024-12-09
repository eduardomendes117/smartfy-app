import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

export default function Carrossel() {
  const produtosLancamento = [
    {
      id: 3,
      img: "/S24.png",
      title:
        "Smartphone Samsung Galaxy S24, Galaxy AI, Selfie de 12MP, Tela de 6.2'' 120Hz, 256GB, 8GB RAM - Cinza",
      price: "R$ 3.299,00",
    },
    {
      id: 4,
      img: "/S24ultra.png",
      title:
        "Smartphone Samsung Galaxy S24 Ultra, Galaxy AI, Selfie de 12MP, Tela de 6.8'' 1-120Hz, 512GB, 12GB RAM - Titânio Cinza",
      price: "R$ 7.999,00",
    },
    {
      id: 5,
      img: "/iPhone16Pro.png",
      title: "Apple iPhone 14 (128 GB) – Estelar",
      price: "R$ 8.299,00",
    },
    {
      id: 6,
      img: "/iPhone15.png",
      title: "Apple iPhone 15 (128 GB) — Preto",
      price: "R$ 4.699,90",
    },
  ];

  const productsSamsung = [
    {
      id: 1,
      img: "/S23.png",
      title: "Samsung Galaxy S23 5G 128 GB",
      price: "R$ 2.999,00",
    },
    {
      id: 2,
      img: "/S23ultra.png",
      title: "Samsung Galaxy S23 Ultra 256 GB",
      price: "R$ 5.499,00",
    },
    {
      id: 3,
      img: "/S24.png",
      title: "Samsung Galaxy S24 5G 128 GB",
      price: "R$ 3.299,00",
    },
    {
      id: 4,
      img: "/S24ultra.png",
      title: "Samsung Galaxy S24 Ultra 256 GB",
      price: "R$ 7.999,00",
    },
  ];

  const productsIphone = [
    { id: 1, img: "/iPhone14.png", title: "Apple iPhone 14 (128 GB)", price: "R$ 3.899,00" },
    { id: 2, img: "/iPhone15.png", title: "Apple iPhone 15 (128 GB)", price: "R$ 4.699,00" },
    { id: 3, img: "/iPhone16.png", title: "Apple iPhone 16 (128 GB)", price: "R$ 5.499,00" },
    {
      id: 4,
      img: "/iPhone16Pro.png",
      title: "Apple iPhone 16 Pro (256 GB)",
      price: "R$ 8.299,00",
    },
  ];

  const productsXiaomi = [
    { id: 1, img: "/Xiaomi14T.png", title: "Smartphone Xiaomi 14T 512GB", price: "R$ 4.499,00" },
    {
      id: 2,
      img: "/Xiaomi14ltra.png",
      title: "Smartphone Xiaomi 14 Ultra 512GB",
      price: "R$ 7.699,00",
    },
    {
      id: 3,
      img: "/Xiaomi13.png",
      title: "Smartphone Xiaomi 13 256GB",
      price: "R$ 3.399,00",
    },
    {
      id: 4,
      img: "/xiaomi13Ultra.png",
      title: "Smartphone Xiaomi 13 Ultra 512GB",
      price: "R$ 6.499,00",
    },
  ];

  return (
    <div className="mt-10">
      <div className="w-full max-w-6xl mx-auto px-5 my-5">
        <h2 className="border-b-4 border-b-blue-500 text-2xl font-medium w-72">
          Lançamentos
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            100: { slidesPerView: 2 },
            600: { slidesPerView: 3 },
            800: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
          }}
        >
          {produtosLancamento.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white shadow-md rounded-lg overflow-hidden p-4 mb-10 mt-5 transform transition duration-300 ease-in-out hover:scale-110">
                <div className="relative w-full h-48">
                  <Image
                    src={product.img}
                    alt={product.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h3 className="mt-4 text-base font-medium line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-xl font-medium text-blue-500">
                  {product.price}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <h2 className="border-b-4 border-b-blue-500 text-2xl font-medium w-72">
          Samsung
        </h2>
        <div className="w-full max-w-6xl mx-auto px-2 my-5">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              100: { slidesPerView: 1 },
              300: { slidesPerView: 2 },
              600: { slidesPerView: 3 },
              800: { slidesPerView: 4 },
              1200: { slidesPerView: 5 },
            }}
          >
            {productsSamsung.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="bg-white shadow-md rounded-lg overflow-hidden p-4 mb-10 mt-5 transform transition duration-300 ease-in-out hover:scale-110">
                  <div className="relative w-full h-48">
                    <Image
                      src={product.img}
                      alt={product.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-medium line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-xl font-medium text-blue-500">
                    {product.price}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <h2 className="border-b-4 border-b-blue-500 text-2xl font-medium w-72">
          iPhone
        </h2>
        <div className="w-full max-w-6xl mx-auto px-2 my-5">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              100: { slidesPerView: 2 },
              600: { slidesPerView: 3 },
              800: { slidesPerView: 4 },
              1200: { slidesPerView: 5 },
            }}
          >
            {productsIphone.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="bg-white shadow-md rounded-lg overflow-hidden p-4 mb-10 mt-5 transform transition duration-300 ease-in-out hover:scale-110">
                  <div className="relative w-full h-48">
                    <Image
                      src={product.img}
                      alt={product.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-medium line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-xl font-medium text-blue-500">
                    {product.price}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <h2 className="border-b-4 border-b-blue-500 text-2xl font-medium w-72">
          Xiaomi
        </h2>
        <div className="w-full max-w-6xl mx-auto px-2 my-5">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              100: { slidesPerView: 2 },
              600: { slidesPerView: 3 },
              800: { slidesPerView: 4 },
              1200: { slidesPerView: 5 },
            }}
          >
            {productsXiaomi.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="bg-white shadow-md rounded-lg overflow-hidden p-4 mb-10 mt-5 transform transition duration-300 ease-in-out hover:scale-110">
                  <div className="relative w-full h-48">
                    <Image
                      src={product.img}
                      alt={product.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-medium line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-xl font-medium text-blue-500">
                    {product.price}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
