import React from 'react';

const businessModels = [
  {
    title: 'Desarrollo de Software a Medida',
    description: 'Soluciones de software personalizadas utilizando IA para reducir tiempos y costos de desarrollo.',
  },
  {
    title: 'Desarrollo y Comercialización de Aplicaciones Móviles',
    description: 'Aplicaciones móviles innovadoras para iOS y Android con funcionalidades avanzadas y monetización eficiente.',
  },
  {
    title: 'Generación Automática de Frameworks con IA',
    description: 'Plataforma que automatiza la creación de frameworks base para desarrollo de software con IA.',
  },
];

const BusinessCard = ({ title, description }: { title: string, description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const BusinessSection = () => (
  <div className="bg-gray-100 py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Nuestros Modelos de Negocio</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {businessModels.map((model, index) => (
          <BusinessCard key={index} title={model.title} description={model.description} />
        ))}
      </div>
    </div>
  </div>
);

export default BusinessSection;