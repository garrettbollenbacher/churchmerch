import Image from "next/image";
import Link from "next/link";
import { Product } from "../types/Product";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={product.churchUrl} passHref>
      <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative w-full h-64">
          <Image
            src={product.imageUrl}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h2>
          <p className="text-gray-600 mb-2">
            {product.category.charAt(0).toUpperCase() +
              product.category.slice(1)}
          </p>
          <p className="text-blue-600 font-bold">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
};
