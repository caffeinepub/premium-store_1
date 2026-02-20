import { useNavigate } from '@tanstack/react-router';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Button } from '../components/ui/button';
import { SHIPPING_COST } from '../utils/constants';

export default function CartPage() {
  const { items, subtotal } = useCart();
  const navigate = useNavigate();
  const shipping = subtotal > 0 ? SHIPPING_COST : 0;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center space-y-6 px-4">
          <h2 className="text-3xl font-bold text-gray-900">Your cart is empty</h2>
          <p className="text-lg text-gray-600">Add some products to get started.</p>
          <Button onClick={() => navigate({ to: '/products' })} size="lg" className="rounded-xl">
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <CartItem key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`} item={item} />
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-semibold">
                    {SHIPPING_COST === 0 ? 'Free' : `$${SHIPPING_COST.toFixed(2)}`}
                  </span>
                </div>
                <div className="border-t border-gray-300 pt-4 flex justify-between text-lg font-bold text-gray-900">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <Button
                onClick={() => navigate({ to: '/checkout' })}
                size="lg"
                className="w-full h-14 text-base rounded-xl"
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
