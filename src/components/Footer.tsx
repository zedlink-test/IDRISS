import React from 'react';
import { FaTiktok } from 'react-icons/fa';
import { Facebook, Instagram, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

 const socialLinks = [
  { 
    icon: Facebook, 
    label: 'Facebook', 
    href: 'https://www.facebook.com/idriss.bournane/', 
    color: 'hover:text-blue-600' 
  },
  { 
    icon: Instagram, 
    label: 'Instagram', 
    href: 'https://www.instagram.com/idrissbournane/', 
    color: 'hover:text-pink-500' 
  },
  { 
    icon: FaTiktok,  // <-- TikTok icon here
    label: 'TikTok', 
    href: 'https://www.tiktok.com', // <-- Replace with your TikTok URL
    color: 'hover:text-gray-800' 
  },
  { 
    icon: MessageCircle, 
    label: 'WhatsApp', 
    href: 'https://wa.me/213770052577', 
    color: 'hover:text-green-500' 
  }
];
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              IDRISS VOYAGE
            </h3>
            <p className="text-gray-300 mb-4">
                The Art Of Happiness !. 
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-cyan-300 transition-colors duration-200">
                  {t('home')}
                </a>
              </li>
              <li>
                <a href="/programmes" className="text-gray-300 hover:text-cyan-300 transition-colors duration-200">
                  {t('programmes')}
                </a>
              </li>
              <li>
                <a href="/visas" className="text-gray-300 hover:text-cyan-300 transition-colors duration-200">
                  {t('visas')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-cyan-300 transition-colors duration-200">
                  {t('aboutUs')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-cyan-300 transition-colors duration-200">
                  {t('contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`p-3 bg-gray-800 rounded-full ${social.color} transition-all duration-200 hover:scale-110 hover:bg-gray-700`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 IDRISS VOYAGE. All rights reserved. | Designed By <a href="https://zedlink.netlify.app/"> | ZED-LINK Solution.</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;