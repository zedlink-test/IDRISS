import React from 'react';
import { FileText, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Visas = () => {
  const { t } = useLanguage();

  const visaTypes = [
    {
      id: 'schengen',
      title: 'SCHENGEN VISA',
      image: 'https://macnkro.com/wp-content/uploads/2023/06/European-Union-Flag-scaled.jpg',
      description: 'For Tourisme, Business, Family, Study',
      countries: 'Available For 7+ Countries'
    },
    {
      id: 'usa',
      title: 'USA',
      image: 'https://i.pinimg.com/736x/a9/cf/4a/a9cf4ae1faee0af9b338cb93a43aa316.jpg',
      description: 'For Tourisme, Business, GreenCard',
      countries: 'Available For USA'
    },
    {
      id: 'uk',
      title: 'UK',
      image: 'https://cdn.mappr.co/wp-content/uploads/2024/02/uk-flag-london.jpg?w=1024&h=683&scale.option=fill&cw=1024&ch=683&cx=center&cy=center',
      description: 'For Tourisme, Business, Family, Study',
      countries: 'Available For UK'
    },
    {
      id: 'canada',
      title: 'CANADA',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg',
      description: 'For Tourisme, Business, Family, Study',
      countries: 'Available For CANADA'
    },
    {
      id: 'china',
      title: 'CHINA',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
      description: 'For Business',
      countries: 'Available For CHINA'
    },
    {
      id: 'turkey',
      title: 'TURKEY',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/800px-Flag_of_Turkey.svg.png',
      description: 'For Tourisme, Business, Family',
      countries: 'Available For TURKEY'
    }
  ];

 const handleWhatsAppRedirect = (visaType: string) => {
  // Your WhatsApp number (no spaces or dashes, country code required)
  const whatsappNumber = '213770052577'; // Algeria country code +213

  // Custom message
  const message = `Hello! I'm interested in applying for a ${visaType}. Could you please provide more information?`;

  // WhatsApp API URL
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  console.log('Redirecting to WhatsApp for:', visaType, 'URL:', whatsappURL);

  // Open WhatsApp in a new tab
  window.open(whatsappURL, '_blank');
};


  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-6">
            {t('visas')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We provide comprehensive visa assistance services for all your travel needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visaTypes.map((visa) => (
            <div
              key={visa.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={visa.image}
                  alt={visa.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-2 text-blue-600 dark:text-cyan-400 mb-2">
                  <FileText className="h-4 w-4" />
                  <span className="text-sm font-medium">Visa Service</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {visa.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 leading-relaxed">
                  {visa.description}
                </p>
                
                <div className="text-sm text-blue-600 dark:text-cyan-400 mb-6 font-medium">
                  {visa.countries}
                </div>
                
                <button
                  onClick={() => handleWhatsAppRedirect(visa.title)}
                  className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>{t('proceder')}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information Section */}
        <div className="mt-16 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Our Visa Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Expert Guidance</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Professional assistance throughout the entire visa process
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Fast Processing</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Quick turnaround times with efficient document handling
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Success Rate</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  High approval rates with proper documentation support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visas;