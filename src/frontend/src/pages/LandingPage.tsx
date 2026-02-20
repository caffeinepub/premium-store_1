import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import WhyChooseUs from '../components/WhyChooseUs';
import ProductShowcase from '../components/ProductShowcase';
import CustomerReviews from '../components/CustomerReviews';
import NewsletterSignup from '../components/NewsletterSignup';

export default function LandingPage() {
  return (
    <div className="w-full">
      <HeroSection />
      <FeaturedProducts />
      <WhyChooseUs />
      <ProductShowcase />
      <CustomerReviews />
      <NewsletterSignup />
    </div>
  );
}
