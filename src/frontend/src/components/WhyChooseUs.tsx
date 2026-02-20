export default function WhyChooseUs() {
  const benefits = [
    {
      icon: '/assets/generated/icon-shipping.dim_128x128.png',
      title: 'Fast Shipping',
      description: 'Free delivery on orders over $100. Get your products in 2-3 business days.',
    },
    {
      icon: '/assets/generated/icon-quality.dim_128x128.png',
      title: 'Premium Quality',
      description: 'Every product is crafted with precision and built to last a lifetime.',
    },
    {
      icon: '/assets/generated/icon-support.dim_128x128.png',
      title: '24/7 Support',
      description: 'Our dedicated team is always here to help you with any questions.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6">
                <img src={benefit.icon} alt={benefit.title} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
