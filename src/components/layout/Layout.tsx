import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { ScrollArea } from '../ui/scroll-area';

const Layout = () => {
  return (
    <div className="min-h-screen bg-background font-sans flex flex-col antialiased">
      <Navbar />
      <ScrollArea className="flex-grow">
        <main className="flex-grow">
          <Outlet />
        </main>
      </ScrollArea>
      <Footer />
    </div>
  );
};

export default Layout;