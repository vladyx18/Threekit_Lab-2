import React, { useState, useEffect } from 'react';
import { ThreekitProvider } from '@threekit-tools/treble';
import GoldMaxH2 from './GoldMaxH2';
import Spinner from './components/MyComponents/Spinner/Spinner';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <ThreekitProvider>
      {isLoading ? <Spinner /> : <GoldMaxH2 />}
    </ThreekitProvider>
  );
};

export default App;
