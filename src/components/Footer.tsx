
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="py-6 px-6 border-t border-border/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-full bg-primary/50"></div>
          <p className="text-sm font-medium">Grok UI Clone</p>
        </div>
        
        <p className="text-sm text-muted-foreground">
          This is a beautiful design inspired by minimalist UI principles
        </p>
        
        <div className="flex items-center space-x-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
