import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { Button } from './ui/button';
import { useNavigate } from '@tanstack/react-router';

interface ProductInfoPanelProps {
  product: Product;
  selectedSize?: string;
  selectedColor?: string;
  quantity: number;
  onSizeChange: (size: string) => void;
  onColorChange: (color: string) => void;
  onQuantityChange: (quantity: number) => void;
  onAddToCart: () => void;
}

export default function ProductInfoPanel({
  product,
  selectedSize,
  selectedColor,
  quantity,
  onSizeChange,
  onColorChange,
  onQuantityChange,
  onAddToCart,
}: ProductInfoPanelProps) {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    onAddToCart();
    navigate({ to: '/cart' });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          {product.name}
        </h1>
        <p className="text-3xl md:text-4xl font-bold text-gray-900">${product.price}</p>
      </div>

      <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>

      {/* Size Selector */}
      {product.sizes && (
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">Size</label>
          <div className="flex flex-wrap gap-3">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => onSizeChange(size)}
                className={`px-6 py-3 rounded-xl border-2 transition-all ${
                  selectedSize === size
                    ? 'border-gray-900 bg-gray-900 text-white'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Color Selector */}
      {product.colors && (
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">Color</label>
          <div className="flex flex-wrap gap-3">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => onColorChange(color)}
                className={`px-6 py-3 rounded-xl border-2 transition-all ${
                  selectedColor === color
                    ? 'border-gray-900 bg-gray-900 text-white'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity Selector */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-3">Quantity</label>
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
            className="rounded-xl h-12 w-12"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => onQuantityChange(quantity + 1)}
            className="rounded-xl h-12 w-12"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Button
          onClick={onAddToCart}
          size="lg"
          variant="outline"
          className="flex-1 h-14 text-base rounded-xl"
        >
          <ShoppingCart className="h-5 w-5 mr-2" />
          Add to Cart
        </Button>
        <Button
          onClick={handleBuyNow}
          size="lg"
          className="flex-1 h-14 text-base rounded-xl"
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
}
