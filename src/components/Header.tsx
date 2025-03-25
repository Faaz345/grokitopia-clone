import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const path = location.pathname.slice(1);
  const isDarkTextPage = path === 'features' || path === 'about';
  
  // Add scroll listener to change header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6",
        isScrolled 
          ? "glass shadow-md backdrop-blur-lg bg-background/70" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <h1 className={cn("text-xl font-medium font-briller", 
            isDarkTextPage ? "text-black" : "text-white"
          )}>
            MINDIGENOUS
          </h1>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className={cn("opacity-70 hover:opacity-100 transition-opacity",
              isDarkTextPage ? "text-black" : "text-white"
            )}
          >
            Home
          </Link>
          <Link 
            to="/features" 
            className={cn("opacity-70 hover:opacity-100 transition-opacity",
              isDarkTextPage ? "text-black" : "text-white"
            )}
          >
            Features
          </Link>
          <Link 
            to="/about" 
            className={cn("opacity-70 hover:opacity-100 transition-opacity",
              isDarkTextPage ? "text-black" : "text-white"
            )}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
