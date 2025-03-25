import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo = ({ className, size = 20 }: LogoProps) => {
  return (
    <div className="relative text-left" style={{ marginTop: "-25px", marginRight: "auto", marginLeft: "-40px" }}>
      <img 
        src="/logo/brainlogo.svg" 
        alt="MINDIGENOUS Logo" 
        className={cn("object-contain", className)}
        style={{ width: size, height: size }}
      />
    </div>
  );
};

export default Logo; 