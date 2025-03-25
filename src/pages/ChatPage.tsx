
import Chat from "@/components/Chat";
import MainLayout from "@/layouts/MainLayout";

const ChatPage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 pt-36 pb-6">
        <div className="min-h-[calc(100vh-160px)] max-w-4xl mx-auto">
          <div className="bg-black/20 backdrop-blur-sm rounded-lg shadow-lg h-full pt-4">
            <Chat />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ChatPage;
