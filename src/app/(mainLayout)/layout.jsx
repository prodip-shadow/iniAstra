import Footer from '@/components/shared/Footer/Footer';
import Navbar from '@/components/shared/Navbar/Navbar';

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main className="flex-1">{children}</main>
      {/* Footer */}
      <Footer />
    </div>
  );
}
