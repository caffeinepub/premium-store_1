import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';

interface ProductGridCardProps {
  product: Product;
}

export default function ProductGridCard({ product }: ProductGridCardProps) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div
      onClick={() => navigate({ to: '/product/$id', params: { id: product.id } })}
      className="group cursor-pointer"
    >
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <button
          onClick={handleWishlist}
          className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
        >
          <Heart
            className={`h-5 w-5 ${
              isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'
            }`}
          />
        </button>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm md:text-base font-semibold text-gray-900 line-clamp-2 group-hover:text-gray-600 transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-lg md:text-xl font-bold text-gray-900">${product.price}</p>
          <Button
            size="sm"
            onClick={handleAddToCart}
            className="rounded-lg h-9 px-3"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
