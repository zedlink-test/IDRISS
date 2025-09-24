
import { MapPin, Phone, Mail, Users, Award, Calendar, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Carousel from '../components/Carousel';
import StatCard from '../components/StatCard';
import PartnerLogo from '../components/PartnerLogo';

const Home = () => {
  const { t } = useLanguage();

  const stats = [
    { number: '2,000+', label: t('happyClients'), icon: <Users className="h-6 w-6 text-white" /> },
    { number: '13', label: t('yearsExperience'), icon: <Calendar className="h-6 w-6 text-white" /> },
    { number: '40+', label: t('destinations'), icon: <Globe className="h-6 w-6 text-white" /> },
    { number: '99%', label: t('trustScore'), icon: <Award className="h-6 w-6 text-white" /> }
  ];

  const partners = [
    { name: 'Air Algérie', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Logo_Air_Alg%C3%A9rie.svg', url: '' },
    { name: 'Emirates', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg', url: '' },
    { name: 'Qatar Airways', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Qatar_Airways_logo.svg', url: '' },
    { name: 'Turkish Airlines', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Turkish_Airlines_logo_%281990-2008%29.svg', url: '' },
    { name: 'ASL', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/ASL_Airlines_Belgium_Logo.svg', url: '' },
    { name: 'Tunisair', logo: 'https://upload.wikimedia.org/wikipedia/fr/5/5c/Tunisair_%28logo%29.svg', url: '' },
    { name: 'Nouvelair', logo: 'https://cdn.brandfetch.io/idoG3IaES6/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B', url: '' },
    { name: 'Amadeus', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Amadeus_%28CRS%29_Logo.svg', url: '' },
    { name: 'IATA', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/IATAlogo.svg', url: '' },
    { name: 'Booking.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Booking.com_Logo.svg', url: '' },
    { name: 'TripAdvisor', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/02/TripAdvisor_Logo.svg', url: '' },
    { name: 'VerisonBooking', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Verison_travel_logo.png', url: '' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-6">
              {t('heroTitle')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('heroSubtitle')}
            </p>
          </div>
          <Carousel />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('aboutTitle')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t('aboutText')}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                number={stat.number}
                label={stat.label}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('contactTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">+213 799 63 25 70  / +213 770 20 37 23</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">idrissbournane44@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Address</h3>
                  <p className="text-gray-600 dark:text-gray-300">Cité 48 LOGTS, El Bayadh, 32000</p>
                </div>
              </div>
            </div>

                          {/* Google Map Embed */}
              <div className="overflow-hidden rounded-xl shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d348.9972253575333!2d1.0185464892570453!3d33.67685264645457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scite%2048%20logs%20el%20bayadh!5e0!3m2!1sen!2sdz!4v1758746970949!5m2!1sen!2sdz"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('partnersTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <PartnerLogo
                key={index}
                name={partner.name}
                logo={partner.logo}
                url={partner.url}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;