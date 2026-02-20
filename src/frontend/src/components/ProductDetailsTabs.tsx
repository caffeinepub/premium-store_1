import { Product } from '../types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Star } from 'lucide-react';

interface ProductDetailsTabsProps {
  product: Product;
}

export default function ProductDetailsTabs({ product }: ProductDetailsTabsProps) {
  const mockReviews = [
    {
      id: '1',
      author: 'Alex Thompson',
      rating: 5,
      comment: 'Absolutely love this product! Exceeded all my expectations.',
      date: '2026-02-15',
    },
    {
      id: '2',
      author: 'Maria Garcia',
      rating: 5,
      comment: 'Premium quality and beautiful design. Worth every penny.',
      date: '2026-02-10',
    },
    {
      id: '3',
      author: 'David Kim',
      rating: 4,
      comment: 'Great product overall. Very satisfied with my purchase.',
      date: '2026-02-05',
    },
  ];

  return (
    <Tabs defaultValue="description" className="w-full">
      <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
        <TabsTrigger
          value="description"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-gray-900 data-[state=active]:bg-transparent px-6 py-4"
        >
          Description
        </TabsTrigger>
        <TabsTrigger
          value="specs"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-gray-900 data-[state=active]:bg-transparent px-6 py-4"
        >
          Specifications
        </TabsTrigger>
        <TabsTrigger
          value="reviews"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-gray-900 data-[state=active]:bg-transparent px-6 py-4"
        >
          Reviews
        </TabsTrigger>
      </TabsList>

      <TabsContent value="description" className="py-8">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            Crafted with precision and designed for excellence, this product represents the
            pinnacle of modern engineering and aesthetic design. Every detail has been carefully
            considered to deliver an unparalleled user experience.
          </p>
        </div>
      </TabsContent>

      <TabsContent value="specs" className="py-8">
        {product.specs && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="flex justify-between py-4 border-b border-gray-200">
                <span className="font-semibold text-gray-900">{key}</span>
                <span className="text-gray-600">{value}</span>
              </div>
            ))}
          </div>
        )}
      </TabsContent>

      <TabsContent value="reviews" className="py-8">
        <div className="space-y-6">
          {mockReviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="font-semibold text-gray-900">{review.author}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gray-900 text-gray-900" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
