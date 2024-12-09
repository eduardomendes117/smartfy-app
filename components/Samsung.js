import Image from "next/image";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import S24ultra from "../public/S24ultra.png";
import S24 from "../public/S24.png";
import S23ultra from "../public/S23ultra.png";
import S23 from "../public/S23.png";

export default function Samsung() {
  const samsungProducts = [
    {
      id: 1,
      name: "Samsung S24 Ultra 128gb",
      image: S24ultra,
      price: "R$ 5.999,00",
    },
    {
      id: 2,
      name: "Samsung S24 256gb",
      image: S24,
      price: "R$ 4.799,00",
    },
    {
      id: 3,
      name: "Samsung S23 Ultra",
      image: S23ultra,
      price: "R$ 6.499,00",
    },
    {
      id: 4,
      name: "Samsung S23",
      image: S23,
      price: "R$ 4.299,00",
    },
  ];

  function ProductCard({ product }) {
    return (
      <div className="min-w-56 max-w-60 w-full bg-white border border-gray-200 rounded-lg shadow flex flex-col">
        <a href="#">
          <Image
            className="p-8 rounded-t-lg"
            src={product.image}
            alt={product.name}
          />
        </a>
        <div className="px-5 pb-5 flex flex-col flex-grow">
          <a href="#">
            <h5 className="sm:text-xl font-semibold tracking-tight text-gray-900">
              {product.name}
            </h5>
          </a>
          <p className="text-lg font-medium text-gray-900 mt-2">
            {product.price}
          </p>
        </div>
      </div>
    );
  }

  function SamsungSection() {
    return (
      <section className="overflow-hidden relative">
        <h2 className="m-3 border-b-4 border-b-blue-500 text-2xl font-medium w-72">
          Samsung
        </h2>
        <div className="mt-10 relative">
          <Carousel className="w-full">
            <CarouselContent className="m-10 flex gap-4">
              {samsungProducts.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-10 top-1/2 -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow hover:bg-gray-300 transition">
              ❮
            </CarouselPrevious>
            <CarouselNext className="absolute -right-10 top-1/2 -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow hover:bg-gray-300 transition">
              ❯
            </CarouselNext>
          </Carousel>
        </div>
      </section>
    );
  }

  return <SamsungSection />;
}
