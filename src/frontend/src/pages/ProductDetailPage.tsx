import { useState, useEffect } from 'react';
import { useParams } from '@tanstack/react-router';
import { PRODUCTS } from '../utils/constants';
import ProductGallery from '../components/ProductGallery';
import ProductInfoPanel from '../components/ProductInfoPanel';
import ProductDetailsTabs from '../components/ProductDetailsTabs';
import { Button } from '../components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductDetailPage() {
  const { id } = useParams({ from: '/product/$id' });
  const product = PRODUCTS.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const [selectedColor, setSelectedColor] = useState<string | undefined>();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const productInfo = document.getElementById('product-info');
      if (productInfo) {
        const rect = productInfo.getBoundingClientRect();
        setShowStickyBar(rect.bottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
          <ProductGallery images={product.images} />
          <div id="product-info">
            <ProductInfoPanel
              product={product}
              selectedSize={selectedSize}
              selectedColor={selectedColor}
              quantity={quantity}
              onSizeChange={setSelectedSize}
              onColorChange={setSelectedColor}
              onQuantityChange={setQuantity}
              onAddToCart={handleAddToCart}
            />
          </div>
        </div>

        <ProductDetailsTabs product={product} />
      </div>

      {/* Mobile Sticky Add to Cart Bar */}
      {showStickyBar && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-40">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-gray-900">{product.name}</p>
              <p className="text-lg font-bold text-gray-900">${product.price}</p>
            </div>
            <Button onClick={handleAddToCart} className="rounded-xl px-6">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
