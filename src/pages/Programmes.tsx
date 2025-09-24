import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Programmes = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const destinations = [
    {
      id: 'dubai',
      title: 'Dubai Explorer',
      image: 'https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '5 Days / 4 Nights',
      description: 'Experience the luxury and innovation of Dubai with our comprehensive tour package.'
    },
    {
      id: 'istanbul',
      title: 'Istanbul Heritage',
      image: 'https://www.spotblue.com/app/uploads/2024/08/Istanbul-800x512.jpg',
      duration: '8 Days / 7 Nights',
      description: 'Wander through ancient streets and vibrant colorful bazaars.'
    },
    {
      id: 'malaysia',
      title: 'Malaysia Kuala Lumpur',
      image: 'https://images.pexels.com/photos/22804/pexels-photo.jpg',
      duration: '12 Days / 11 Nights',
      description: 'Explore tropical rainforests and serene island beaches.'
    },
    {
      id: 'egypte',
      title: 'Egypte / Sahrm El Sheikh',
      image: 'https://github.com/zedlink-dz/PICS/blob/main/EGYPTE.png?raw=true',
      duration: '10 Days / 9 Nights',
      description: 'Cruise the Nile, marvel at pyramids, and enjoy Sharm El Sheikh`s charm'
    },
      {
      id: 'lebanon',
      title: 'Lebanon',
      image: 'https://github.com/zedlink-dz/PICS/blob/main/LEBANON.png?raw=true',
      duration: '10 Days / 9 Nights',
      description: 'Enjoy mountain retreats and Mediterranean coastal charm.'
    },
    {
      id: 'tunisia',
      title: 'Tunisia',
      image: 'https://image.urlaubspiraten.de/640/image/upload/v1603291299/mediavault_images/ld6qvo4aywkeefnf7npu.jpg',
      duration: '7 Days / 6 Nights',
      description: 'Relax at beachside hotels and unwind in peaceful paradise.'
    },
    {
      id: 'desert',
      title: 'Algerian Sahara',
      image: '	https://i.pinimg.com/736x/19/45/63/194563d8bfaf558b8361b5e762f944f5.jpg',
      duration: '8 Days / 7 Nights',
      description: 'Ride golden dunes and watch magical desert sunsets.'
    },
    {
      id: 'oran',
      title: 'Algeria Oran',
      image: 'https://preview.redd.it/oran-algeria-v0-afkyvd9zrqcb1.jpg?width=640&crop=smart&auto=webp&s=4038e65bc993c6af2440f2c34f39bcda98eccb5b',
      duration: '5 Days / 4 Nights',
      description: 'Enjoy beautiful beaches and exciting water activities.'
    },
      {
      id: 'omra',
      title: 'Omra',
      image: 'https://github.com/zedlink-dz/PICS/blob/main/KAABA.111Z.png?raw=true',
      duration: '15 Days / 14 Nights',
      description: 'Embark on a sacred spiritual journey of devotion.'
    }
  ];

  const handleBooking = (destinationId: string) => {
    navigate(`/booking/${destinationId}`);
  };

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-6">
            {t('programmes')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose Your Stay From Our Beautiful Destinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-2 text-blue-600 dark:text-cyan-400 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm font-medium">{destination.title}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {destination.title}
                </h3>
                
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 mb-3">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{destination.duration}</span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                  {destination.description}
                </p>
                
                <button
                  onClick={() => handleBooking(destination.id)}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Users className="h-4 w-4" />
                  <span>{t('bookNow')}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programmes;