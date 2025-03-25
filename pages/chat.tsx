import { NextPage } from 'next';
import Chat from '../components/Chat';

const ChatPage: NextPage = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Chat />
    </div>
  );
};

export default ChatPage; 