import { useNavigate } from '@tanstack/react-router';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate({ to: '/product/$id', params: { id: product.id } })}
      className="group cursor-pointer"
    >
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-xl font-bold text-gray-900">${product.price}</p>
      </div>
    </div>
  );
}
