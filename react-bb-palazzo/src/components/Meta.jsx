import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = () => {
  return (
    <Helmet>
      {/* Meta tag per viewport responsive */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      
      {/* Meta tag per dispositivi Apple */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Previene lo zoom automatico sui form in iOS */}
      <meta name="format-detection" content="telephone=no" />
      
      {/* Tema colore per la barra di stato mobile */}
      <meta name="theme-color" content="#8B5E34" />
    </Helmet>
  );
};

export default Meta;