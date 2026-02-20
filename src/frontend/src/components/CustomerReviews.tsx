import { Star } from 'lucide-react';

export default function CustomerReviews() {
  const reviews = [
    {
      id: '1',
      author: 'Sarah Johnson',
      rating: 5,
      comment: 'Absolutely love the quality and design. Worth every penny!',
    },
    {
      id: '2',
      author: 'Michael Chen',
      rating: 5,
      comment: 'Best purchase I\'ve made this year. Exceeded all expectations.',
    },
    {
      id: '3',
      author: 'Emily Rodriguez',
      rating: 5,
      comment: 'The attention to detail is incredible. Highly recommend!',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gray-900 text-gray-900" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">{review.comment}</p>
              <p className="font-semibold text-gray-900">{review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
