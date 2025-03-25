import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoBackground from "@/components/VideoBackground";
import BrainLogo from "@/components/BrainLogo";
import { useLocation } from "react-router-dom";

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainLayout = ({ children, className }: MainLayoutProps) => {
  const location = useLocation();
  const path = location.pathname.slice(1) || 'home';
  const pageClass = `${path}-page`;

  return (
    <div className={cn("min-h-screen", pageClass, className)}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      <VideoBackground />
    </div>
  );
};

export default MainLayout;
