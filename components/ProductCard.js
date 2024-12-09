import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow">
      <a href="#">
        <Image className="p-8 rounded-t-lg" src={product.image} alt={product.name} />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="sm:text-xl font-semibold tracking-tight text-gray-900">
            {product.name}
          </h5>
        </a>
        <p className="text-lg font-medium text-gray-900 mt-2">{product.price}</p>
      </div>
    </div>
  );
}
