
import MainLayout from "@/layouts/MainLayout";
import ChatInterface from "@/components/ChatInterface";
import { useEffect } from "react";

const Index = () => {
  // Add subtle background animation effects
  useEffect(() => {
    // Create and add a blob element to the background
    const createBlob = () => {
      const blob = document.createElement("div");
      blob.classList.add(
        "absolute",
        "rounded-full",
        "bg-primary/5",
        "filter",
        "blur-3xl",
        "animate-breathe"
      );
      
      // Random position
      blob.style.width = `${Math.random() * 400 + 200}px`;
      blob.style.height = blob.style.width;
      blob.style.left = `${Math.random() * 100}%`;
      blob.style.top = `${Math.random() * 100}%`;
      blob.style.opacity = "0.4";
      blob.style.zIndex = "-1";
      
      // Random animation delay
      blob.style.animationDelay = `${Math.random() * 5}s`;
      
      document.getElementById("background-effects")?.appendChild(blob);
    };
    
    // Create a few blobs
    for (let i = 0; i < 3; i++) {
      createBlob();
    }
    
    return () => {
      // Clean up
      const container = document.getElementById("background-effects");
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);
  
  return (
    <MainLayout className="overflow-hidden relative">
      {/* Background effects */}
      <div 
        id="background-effects" 
        className="fixed inset-0 overflow-hidden pointer-events-none"
      ></div>
      
      <ChatInterface />
    </MainLayout>
  );
};

export default Index;
