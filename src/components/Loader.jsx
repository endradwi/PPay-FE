import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Loader() {
  const [loading, setLoading] = useState(true);
  const location = useLocation

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  return loading && (
    <div className='w-full h-screen flex justify-center items-center'>
    <div className="loader"></div>
    </div>
  );
}

export default Loader;
