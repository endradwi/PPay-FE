import React, { useState, useEffect } from 'react';

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Waktu tunggu loader (misalnya 2 detik)

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className="loader"></div>
  ) : (
    <div className="loader">Page Loaded</div>
  );
}

export default Loader;
