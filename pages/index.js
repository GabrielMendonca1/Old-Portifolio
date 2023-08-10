import { useState, useEffect } from 'react';
import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, WhatsNew } from '../sections';

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="bg-primary-black overflow-hidden overflow-x-hidden">
      {loading ? (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-primary-black flex items-center justify-center">
          <div className="loader" />
        </div>
      ) : null}
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-03 z-0" />
        <WhatsNew />
      </div>
      <div>
        <Feedback />
      </div>
      <Footer />
    </div>
  );
};


export default Page;