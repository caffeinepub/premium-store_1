import { PRODUCTS } from '../utils/constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ProductShowcase() {
  const showcaseProducts = [PRODUCTS[1], PRODUCTS[2]];
  const { ref: ref1, isVisible: isVisible1 } = useScrollAnimation();
  const { ref: ref2, isVisible: isVisible2 } = useScrollAnimation();

  return (
    <section id="product-showcase" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
        {/* First Product - Image Left */}
        <div
          ref={ref1}
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 ${
            isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={showcaseProducts[0].image}
              alt={showcaseProducts[0].name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              {showcaseProducts[0].name}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {showcaseProducts[0].description}
            </p>
            <p className="text-3xl font-bold text-gray-900">${showcaseProducts[0].price}</p>
          </div>
        </div>

        {/* Second Product - Image Right */}
        <div
          ref={ref2}
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 ${
            isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="space-y-6 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              {showcaseProducts[1].name}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {showcaseProducts[1].description}
            </p>
            <p className="text-3xl font-bold text-gray-900">${showcaseProducts[1].price}</p>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl lg:order-2">
            <img
              src={showcaseProducts[1].image}
              alt={showcaseProducts[1].name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
