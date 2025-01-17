import Image from "next/image";
import Link from "next/link";
import { Product } from "../types/Product";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return product.churchUrl ? (
    <Link href={product.churchUrl} passHref legacyBehavior>
      <a target="_blank" rel="noopener noreferrer">
        <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full h-full">
          <div className="relative w-full h-64">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
              {product.name}
            </h2>
            {product.churchName && (
              <p className="text-gray-600 mb-2">
                {product.churchName.charAt(0).toUpperCase() +
                  product.churchName.slice(1)}
              </p>
            )}
            <p className="text-gray-800 font-semibold">{product.price}</p>
          </div>
        </div>
      </a>
    </Link>
  ) : (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full h-full">
      <div className="relative w-full h-64">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h2>
        {product.churchName && (
          <p className="text-gray-600 mb-2">
            {product.churchName.charAt(0).toUpperCase() +
              product.churchName.slice(1)}
          </p>
        )}
        <p className="text-gray-800 font-semibold">{product.price}</p>
      </div>
    </div>
  );
};