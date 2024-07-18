// LoadingComponent.js
import React from 'react';

const LoadingComponent = ({ isLoading }) => {
  if (!isLoading) return null;

  return <div className="loading-placeholder">Laden...</div>;
};

export default LoadingComponent;
