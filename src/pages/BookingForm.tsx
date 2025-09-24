import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Phone, Users, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const BookingForm = () => {
  const { destination } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    travelers: 1,
    phone: '',
    wilaya: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const algerianWilayas = [
    'Alger (Algiers)', 'Oran', 'Constantine', 'Annaba', 'Blida', 'Batna', 'Sétif', 'Sidi Bel Abbès',
    'Djelfa', 'Tiaret', 'Béjaïa', 'Tlemcen', 'Ouargla', 'Skikda', 'Chlef', 'Jijel',
    'Relizane', 'Saïda', 'Médéa', 'Mostaganem', 'M\'Sila', 'Mascara', 'Bordj Bou Arréridj',
    'Tébessa', 'El Oued', 'Khenchela', 'Souk Ahras', 'Tipaza', 'Mila', 'Aïn Defla',
    'Naâma', 'Aïn Témouchent', 'Ghardaïa', 'Adrar', 'Laghouat', 'Guelma', 'Bouira',
    'Tamanrasset', 'El Tarf', 'Tissemsilt', 'El Bayadh', 'Khenchela', 'Mila',
    'Aïn Defla', 'Naâma', 'Aïn Témouchent', 'Ghardaïa', 'Relizane', 'Tindouf',
    'El Oued', 'Illizi', 'Bordj Badji Mokhtar', 'Ouled Djellal', 'Béni Abbès',
    'In Salah', 'In Guezzam', 'Touggourt', 'Djanet', 'M\'Ghair'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'travelers' ? parseInt(value) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = new FormData();
    form.append('destination', destination || '');
    form.append('name', formData.name);
    form.append('surname', formData.surname);
    form.append('travelers', formData.travelers.toString());
    form.append('phone', formData.phone);
    form.append('wilaya', formData.wilaya);

    try {
      const response = await fetch('https://formspree.io/f/xvgwgzzk', {
        method: 'POST',
        body: form,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          surname: '',
          travelers: 1,
          phone: '',
          wilaya: ''
        });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.');
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-blue-900">
        <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-2xl text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Thank you!</h2>
          <p className="text-gray-700 dark:text-gray-300">Your booking request has been sent successfully.</p>
          <button
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            onClick={() => setSubmitted(false)}
          >
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-blue-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={() => navigate('/programmes')}
            className="flex items-center space-x-2 text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Programmes</span>
          </button>
        </div>

        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-6">
            <h1 className="text-3xl font-bold text-white">
              {t('bookingTitle')}
            </h1>
            <p className="text-blue-100 mt-2 capitalize">
              Destination: {destination?.replace('-', ' ')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <User className="h-4 w-4" />
                  <span>{t('name')}</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                  placeholder="Enter your first name"
                />
              </div>

              {/* Surname */}
              <div>
                <label htmlFor="surname" className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <User className="h-4 w-4" />
                  <span>{t('surname')}</span>
                </label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  required
                  value={formData.surname}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                  placeholder="Enter your last name"
                />
              </div>

              {/* Number of Travelers */}
              <div>
                <label htmlFor="travelers" className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Users className="h-4 w-4" />
                  <span>{t('travelers')}</span>
                </label>
                <input
                  type="number"
                  id="travelers"
                  name="travelers"
                  min="1"
                  max="20"
                  required
                  value={formData.travelers}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Phone className="h-4 w-4" />
                  <span>{t('phone')}</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                  placeholder="+213 XXX XXX XXX"
                />
              </div>
            </div>

            {/* Wilaya */}
            <div>
              <label htmlFor="wilaya" className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <MapPin className="h-4 w-4" />
                <span>{t('wilaya')}</span>
              </label>
              <select
                id="wilaya"
                name="wilaya"
                required
                value={formData.wilaya}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
              >
                <option value="">{t('selectWilaya')}</option>
                {algerianWilayas.map((wilaya, index) => (
                  <option key={index} value={wilaya}>
                    {wilaya}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>{t('submit')}</span>
              </button>
            </div>

            <div className="text-center text-sm text-gray-600 dark:text-gray-400">
              <p>Your information is secure and will be used only for booking purposes.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
