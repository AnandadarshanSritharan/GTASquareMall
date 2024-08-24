import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from "../assets/pngegg.png";
import { useNavigate } from 'react-router-dom';
import { navItems } from "../constants";

interface NavbarProps {
  featureRef: React.RefObject<HTMLDivElement>;
  footerRef: React.RefObject<HTMLDivElement>;
}

const Navbar: React.FC<NavbarProps> = ({ featureRef, footerRef }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">GTA Square Mall</span>
          </div>

          {/* Nav Items */}
          <ul className="hidden lg:flex ml-14 space-x-12 h-full">
            {navItems.map((item, index) => (
              <li key={index} className="h-full">
                <a
                  onClick={() => {
                    if (item.label === 'Home') {
                      navigate('/');
                    } else if (item.label === 'Features') {
                      scrollToSection(featureRef);
                    } else if (item.label === 'Contact US') {
                      scrollToSection(footerRef);
                    } else if (item.label === 'Shops') {
                      navigate('/shops');
                    }
                  }}
                  href={item.label === 'Location' ? item.href : undefined}  // Only add href for Location
                  className="flex items-center h-full px-4 py-2 rounded-lg transition-colors bg-transparent hover:bg-orange-600 hover:text-white cursor-pointer"
                  target={item.label === 'Location' ? '_blank' : undefined}  // Open Location in a new tab
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-100 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            {navItems.map((item, index) => (
              <li key={index} className='py-4'>
                <a
                  onClick={() => {
                    if (item.label === 'Home') {
                      navigate('/');
                    } else if (item.label === 'Features') {
                      scrollToSection(featureRef);
                    } else if (item.label === 'Contact US') {
                      scrollToSection(footerRef);
                    } else if (item.label === 'Shops') {
                      navigate('/shops');
                    }
                  }}
                  href={item.label === 'Location' ? item.href : undefined}  // Only add href for Location
                  className='cursor-pointer'
                  target={item.label === 'Location' ? '_blank' : undefined}  // Open Location in a new tab
                >
                  {item.label}
                </a>
              </li>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
