import React from 'react';

interface PartnerLogoProps {
  name: string;
  logo: string;
  url: string;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ name, logo, url }) => {
  const handleClick = () => {
    // URL will be updated later as per user's request
    console.log(`Redirecting to ${name} - URL will be added later`);
    // window.open(url, '_blank');
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-cyan-400"
    >
      <div className="flex items-center justify-center h-16">
        <img
          src={logo}
          alt={name}
          className="max-h-full max-w-full object-contain filter dark:brightness-90"
        />
      </div>
      <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 font-medium">
        {name}
      </p>
    </div>
  );
};

export default PartnerLogo;