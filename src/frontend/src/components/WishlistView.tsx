import { PRODUCTS } from '../utils/constants';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';
import { ShoppingCart, X } from 'lucide-react';

export default function WishlistView() {
  const { addToCart } = useCart();
  const wishlistProducts = PRODUCTS.slice(0, 3);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">My Wishlist</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {wishlistProducts.map((product) => (
          <div key={product.id} className="border border-gray-200 rounded-2xl p-4">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50 mb-4">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              <button className="absolute top-3 right-3 p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                <X className="h-4 w-4" />
              </button>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
            <p className="text-xl font-bold text-gray-900 mb-4">${product.price}</p>
            <Button
              onClick={() => addToCart(product)}
              className="w-full rounded-xl"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
