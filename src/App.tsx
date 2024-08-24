import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import Shops from './Shops'; // New Shops component
import { scaleUp, slideInLeft, slideInUp } from './animation';

const App = () => {
  const featureRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <Router>
      <div>
        <Navbar featureRef={featureRef} footerRef={footerRef} />

        <Routes>
          {/* Main Page */}
          <Route
            path="/"
            element={
              <div className="max-w-7xl mx-auto pt-20 px-6">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={scaleUp}
                >
                  <HeroSection />
                </motion.div>

                <motion.div
                  ref={featureRef}
                  initial="hidden"
                  whileInView="visible"
                  variants={slideInLeft}
                >
                  <FeatureSection />
                </motion.div>

                <motion.div
                  ref={footerRef}
                  initial="hidden"
                  whileInView="visible"
                  variants={slideInUp}
                >
                  <Footer />
                </motion.div>
              </div>
            }
          />

          {/* Shops Page */}
          <Route path="/shops" element={<Shops />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
