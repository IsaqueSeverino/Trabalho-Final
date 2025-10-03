import React from 'react';

// 1. Definimos uma 'interface' para descrever as propriedades (props) que o componente vai receber
interface ServiceCardProps {
  iconUrl: string;
  title: string;
  altText: string;
}

// 2. Usamos a interface para tipar as props do componente
const ServiceCard: React.FC<ServiceCardProps> = ({ iconUrl, title, altText }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">
      <img src={iconUrl} alt={altText} className="h-16 w-16 mb-4" />
      <h2 className="text-lg font-semibold text-center text-gray-800">{title}</h2>
    </div>
  );
};

export default ServiceCard;