import { Link } from '@tanstack/react-router';
import { SiFacebook, SiX, SiInstagram, SiYoutube } from 'react-icons/si';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'premium-store'
  );

  const footerSections = [
    {
      title: 'Products',
      links: [
        { name: 'Audio', path: '/products' },
        { name: 'Wearables', path: '/products' },
        { name: 'Home', path: '/products' },
        { name: 'Accessories', path: '/products' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', path: '/' },
        { name: 'Careers', path: '/' },
        { name: 'Press', path: '/' },
        { name: 'News', path: '/' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', path: '/' },
        { name: 'Contact Us', path: '/' },
        { name: 'Shipping', path: '/' },
        { name: 'Returns', path: '/' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/' },
        { name: 'Terms of Service', path: '/' },
        { name: 'Cookie Policy', path: '/' },
      ],
    },
  ];

  const socialLinks = [
    { icon: SiFacebook, href: '#', label: 'Facebook' },
    { icon: SiX, href: '#', label: 'X' },
    { icon: SiInstagram, href: '#', label: 'Instagram' },
    { icon: SiYoutube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-gray-600">
            <p>© {currentYear} Premium Store. All rights reserved.</p>
            <p className="flex items-center">
              Built with <Heart className="h-4 w-4 mx-1 text-red-500 fill-red-500" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 hover:text-gray-900 transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
