import { useEffect, useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Button } from './ui/button';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToShowcase = () => {
    const showcase = document.getElementById('product-showcase');
    if (showcase) {
      showcase.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
              Designed For The Future.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-xl">
              Precision. Performance. Perfection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => navigate({ to: '/products' })}
                className="text-base px-8 py-6 rounded-xl"
              >
                Shop Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToShowcase}
                className="text-base px-8 py-6 rounded-xl"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/assets/generated/hero-headphones.dim_2400x1600.png"
                alt="Premium Wireless Headphones"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
