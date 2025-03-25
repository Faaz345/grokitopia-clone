import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface ChatProps {
  className?: string;
}

const Chat = ({ className }: ChatProps) => {
  return (
    <div className={cn("flex flex-col h-[calc(100vh-180px)]", className)}>
      {/* Model Selector */}
      <div className="px-4 mb-4">
        <select className="w-full bg-secondary/10 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
          <option value="gpt-3.5">GPT-3.5 (Free)</option>
          <option value="gpt-4">GPT-4 (Premium)</option>
          <option value="claude">Claude (Premium)</option>
        </select>
      </div>

      {/* Chat Container */}
      <Card className="flex-1 p-4 mb-4 overflow-y-auto">
        <div className="space-y-4">
          {/* Messages Container */}
          <div className="flex flex-col gap-3 mt-40">
            {/* AI Message */}
            <div className="flex items-start gap-3 max-w-[80%]">
              <div className="rounded-lg bg-secondary/10 p-4">
                <p className="text-sm text-white">
                  Hello! I'm MINDIGENOUS, an AI assistant designed to help with your questions. How can I assist you today?
                </p>
              </div>
            </div>

            {/* User Message */}
            <div className="flex items-start justify-end gap-3 max-w-[80%] ml-auto">
              <div className="rounded-lg bg-primary/20 p-4">
                <p className="text-sm text-white">
                  Hi! I'd like to discuss something.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Input Area - Now fixed at bottom */}
      <div className="p-4 border-t border-white/10 bg-black/20 rounded-b-lg">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 bg-secondary/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Button size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat; 