import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const path = location.pathname.slice(1);
  const isDarkTextPage = path === 'features' || path === 'about';

  return (
    <footer className="py-8 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className={cn("text-sm", 
              isDarkTextPage ? "text-black" : "text-white"
            )}>
              © 2024 MINDIGENOUS. All rights reserved.
            </p>
          </div>
          <nav className="flex space-x-6">
            <Link 
              to="/privacy" 
              className={cn("text-sm opacity-70 hover:opacity-100 transition-opacity",
                isDarkTextPage ? "text-black" : "text-white"
              )}
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className={cn("text-sm opacity-70 hover:opacity-100 transition-opacity",
                isDarkTextPage ? "text-black" : "text-white"
              )}
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
