
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
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
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-primary animate-pulse-slow"></div>
          <h1 className="text-xl font-medium">Grok</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Home</a>
          <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Features</a>
          <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">About</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
