import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for doesn't exist.</p>
      <Link to="/">Go Back to Home</Link>
    </div>
  );
};

export default Page404;