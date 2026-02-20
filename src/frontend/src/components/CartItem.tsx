import { Minus, Plus, X } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-6">
      <div className="flex gap-4 md:gap-6">
        {/* Product Image */}
        <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-xl overflow-hidden bg-gray-50">
          <img
            src={item.product.image}
            alt={item.product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
              {item.product.name}
            </h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeFromCart(item.product.id)}
              className="flex-shrink-0 ml-2"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {(item.selectedSize || item.selectedColor) && (
            <div className="flex flex-wrap gap-2 mb-3 text-sm text-gray-600">
              {item.selectedSize && <span>Size: {item.selectedSize}</span>}
              {item.selectedColor && <span>Color: {item.selectedColor}</span>}
            </div>
          )}

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                className="rounded-lg h-9 w-9"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-base font-semibold w-8 text-center">{item.quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                className="rounded-lg h-9 w-9"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <p className="text-xl font-bold text-gray-900">
              ${(item.product.price * item.quantity).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
