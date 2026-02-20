import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 349,
    description: 'Experience unparalleled sound quality with our flagship wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium materials.',
    image: '/assets/generated/hero-headphones.dim_2400x1600.png',
    images: [
      '/assets/generated/hero-headphones.dim_2400x1600.png',
      '/assets/generated/hero-headphones.dim_2400x1600.png',
      '/assets/generated/hero-headphones.dim_2400x1600.png',
    ],
    category: 'Audio',
    rating: 4.8,
    reviews: 1247,
    colors: ['Black', 'Silver', 'Space Gray'],
    specs: {
      'Battery Life': '30 hours',
      'Connectivity': 'Bluetooth 5.0',
      'Weight': '250g',
      'Noise Cancellation': 'Active',
    },
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    price: 399,
    description: 'Stay connected and track your fitness with precision. Advanced health monitoring, GPS, and seamless integration with your devices.',
    image: '/assets/generated/product-smartwatch.dim_2000x2000.png',
    images: [
      '/assets/generated/product-smartwatch.dim_2000x2000.png',
      '/assets/generated/product-smartwatch.dim_2000x2000.png',
      '/assets/generated/product-smartwatch.dim_2000x2000.png',
    ],
    category: 'Wearables',
    rating: 4.9,
    reviews: 892,
    sizes: ['40mm', '44mm'],
    colors: ['Black', 'Silver', 'Gold'],
    specs: {
      'Display': 'OLED Retina',
      'Battery': '18 hours',
      'Water Resistance': '50m',
      'Sensors': 'Heart Rate, GPS, Compass',
    },
  },
  {
    id: '3',
    name: 'True Wireless Earbuds',
    price: 249,
    description: 'Compact design meets exceptional audio. Adaptive EQ, spatial audio, and all-day comfort in a pocket-sized package.',
    image: '/assets/generated/product-earbuds.dim_2000x2000.png',
    images: [
      '/assets/generated/product-earbuds.dim_2000x2000.png',
      '/assets/generated/product-earbuds.dim_2000x2000.png',
      '/assets/generated/product-earbuds.dim_2000x2000.png',
    ],
    category: 'Audio',
    rating: 4.7,
    reviews: 2103,
    colors: ['White', 'Black'],
    specs: {
      'Battery Life': '6 hours (24 with case)',
      'Connectivity': 'Bluetooth 5.2',
      'Water Resistance': 'IPX4',
      'Noise Cancellation': 'Active',
    },
  },
  {
    id: '4',
    name: 'Minimalist Desk Lamp',
    price: 179,
    description: 'Illuminate your workspace with elegance. Adjustable brightness, color temperature control, and timeless design.',
    image: '/assets/generated/product-desk-lamp.dim_2000x2000.png',
    images: [
      '/assets/generated/product-desk-lamp.dim_2000x2000.png',
      '/assets/generated/product-desk-lamp.dim_2000x2000.png',
      '/assets/generated/product-desk-lamp.dim_2000x2000.png',
    ],
    category: 'Home',
    rating: 4.6,
    reviews: 456,
    colors: ['White', 'Black', 'Silver'],
    specs: {
      'Brightness': '1000 lumens',
      'Color Temperature': '2700K-6500K',
      'Power': 'USB-C',
      'Adjustability': '360° rotation',
    },
  },
  {
    id: '5',
    name: 'Premium Tech Accessories',
    price: 129,
    description: 'Complete your setup with our curated collection of premium accessories. Designed for the modern workspace.',
    image: '/assets/generated/product-accessories.dim_2000x2000.png',
    images: [
      '/assets/generated/product-accessories.dim_2000x2000.png',
      '/assets/generated/product-accessories.dim_2000x2000.png',
      '/assets/generated/product-accessories.dim_2000x2000.png',
    ],
    category: 'Accessories',
    rating: 4.5,
    reviews: 678,
    colors: ['Black', 'Gray'],
    specs: {
      'Includes': 'Cable organizer, stand, mat',
      'Material': 'Premium aluminum',
      'Compatibility': 'Universal',
    },
  },
];

export const CATEGORIES = ['All', 'Audio', 'Wearables', 'Home', 'Accessories'];

export const SHIPPING_COST: number = 0;
export const FREE_SHIPPING_THRESHOLD = 100;
