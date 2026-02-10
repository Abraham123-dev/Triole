import React, {useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';


  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Service', path: '/#service' },
    { name: 'Testimonial', path: '/#testimonial' },
    { name: 'Pricing', path: '/#pricing' },
  ];


export const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

  
   const handleNavClick = (path) => {
    if (path.startsWith('#')) {
        const id = path.substring(1);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
   };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
            <div className="max-w-360 mx-auto px-6 lg:px-6">
                <div className='flex justify-between items-center'>

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 z-50 relative" onClick={() => window.scrollTo(0,0)}>
                        <div className='w-10 h-10 bg-triloe-blue rounded-[12px] flex items-center justify-center text-white shadow-lg shadow-triloe-blue/20'>
                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                </div>
                <span className="font-bold text-triloe-dark text-2xl tracking-tight">Triloe</span>
             </Link>
              
                        {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className="text-triloe-grey hover:text-triloe-blue font-medium text-[16px] transition-colors"
              >
                {item.name}
              </Link>
            ))}
           
          </div>

           {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link to="/careers">
              <button className="bg-triloe-blue text-white px-8 py-3.5 rounded-full font-medium text-[16px] flex items-center gap-2.5 hover:bg-blue-700 transition-all shadow-button hover:shadow-lg hover:-translate-y-0.5">
                Careers
                <span className="w-2 h-2 bg-white rounded-full"></span>
              </button>
            </Link>
          </div>
            
            {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-triloe-dark p-2 z-50 relative" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
              <motion.span 
                animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-current rounded-full origin-center transition-all"
              />
              <motion.span 
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-current rounded-full transition-all"
              />
              <motion.span 
                animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-current rounded-full origin-center transition-all"
              />
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-white z-40 lg:hidden pt-24 px-6 flex flex-col overflow-hidden"
          >
             <div className="flex flex-col gap-2">
               {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Link 
                      to={item.path} 
                      onClick={() => handleNavClick(item.path)}
                      className="block text-2xl font-medium text-triloe-dark py-4 border-b border-gray-50 hover:text-triloe-blue"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
               ))}
               
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.4 }}
                 className="mt-8"
               >
                 <Link to="/careers" onClick={() => setMobileMenuOpen(false)}>
                   <button className="bg-triloe-blue text-white px-6 py-4 rounded-full font-medium w-full flex justify-center items-center gap-2 text-lg shadow-button">
                      Join our team
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                   </button>
                 </Link>
               </motion.div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    )
       
}

export default Navbar;