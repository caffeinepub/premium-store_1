import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Stay Updated
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Subscribe to our newsletter for exclusive offers and product launches.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 h-12 px-6 rounded-xl text-base"
          />
          <Button type="submit" size="lg" className="h-12 px-8 rounded-xl">
            Subscribe
          </Button>
        </form>

        {submitted && (
          <p className="mt-4 text-green-600 font-medium">Thank you for subscribing!</p>
        )}
      </div>
    </section>
  );
}
