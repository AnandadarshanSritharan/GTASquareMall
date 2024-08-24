import  { useEffect, useState } from 'react';

const Shops = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a loading delay of 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {loading ? (
        <div className="loader"> {/* Loading animation */}
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status"></div>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <h1 className="text-2xl font-semibold text-gray-700">Shop details coming soon!</h1>
      )}
    </div>
  );
};

export default Shops;
