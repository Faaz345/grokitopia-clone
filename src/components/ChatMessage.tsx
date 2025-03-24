
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export type MessageRole = "system" | "user" | "assistant";

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
  isLast?: boolean;
}

export const ChatMessage = ({ message, isLast }: ChatMessageProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const messageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // For AI message typing effect
  const [displayedContent, setDisplayedContent] = useState("");
  const [isTyping, setIsTyping] = useState(message.role === "assistant");
  
  useEffect(() => {
    if (message.role === "assistant" && isLast) {
      let i = 0;
      const typingSpeed = 10; // Lower for faster typing
      
      const typingInterval = setInterval(() => {
        if (i < message.content.length) {
          setDisplayedContent(message.content.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, typingSpeed);
      
      return () => clearInterval(typingInterval);
    } else {
      setDisplayedContent(message.content);
      setIsTyping(false);
    }
  }, [message.content, message.role, isLast]);

  const isUser = message.role === "user";
  
  return (
    <div
      ref={messageRef}
      className={cn(
        "flex w-full max-w-4xl mx-auto px-4 py-6 transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "message-appear opacity-0 max-w-[85%] md:max-w-[75%] rounded-2xl px-5 py-4",
          isUser 
            ? "bg-primary text-primary-foreground ml-auto" 
            : "glass-card mr-auto"
        )}
        style={{ animationDelay: "50ms" }}
      >
        <div className={cn("prose prose-lg", isUser ? "text-primary-foreground" : "text-foreground")}>
          {isTyping ? (
            <>
              <p className="m-0">{displayedContent}</p>
              {displayedContent.length < message.content.length && (
                <div className="typing-indicator mt-2">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}
            </>
          ) : (
            <p className="m-0">{message.content}</p>
          )}
        </div>
      </div>
    </div>
  );
};
