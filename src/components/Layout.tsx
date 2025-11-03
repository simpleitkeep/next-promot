import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'Promot - Headless WordPress Solutions',
  description = 'Lightning-fast, omnichannel WordPress storefronts with Next.js'
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Navigation - Promot Style */}
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3 group">
                <Image 
                  src="/promot-logo.png" 
                  alt="Promot Logo" 
                  width={180} 
                  height={60}
                  className="h-14 w-auto transition-transform group-hover:scale-105"
                  priority
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link href="#problem" className="text-gray-700 hover:text-black font-medium transition-colors">
                  The Problem
                </Link>
                <Link href="#solution" className="text-gray-700 hover:text-black font-medium transition-colors">
                  Our Solution
                </Link>
                <Link href="#process" className="text-gray-700 hover:text-black font-medium transition-colors">
                  How It Works
                </Link>
                <Link 
                  href="#contact" 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  Start Pilot
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-900" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-900" />
                )}
              </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
                <div className="flex flex-col space-y-4">
                  <Link 
                    href="#problem" 
                    className="text-gray-700 hover:text-black font-medium py-2 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    The Problem
                  </Link>
                  <Link 
                    href="#solution" 
                    className="text-gray-700 hover:text-black font-medium py-2 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Our Solution
                  </Link>
                  <Link 
                    href="#process" 
                    className="text-gray-700 hover:text-black font-medium py-2 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    How It Works
                  </Link>
                  <Link 
                    href="#contact" 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Start Pilot
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-20">
          {children}
        </main>

        {/* Footer - Promot Style */}
        <footer className="bg-black text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              {/* Brand Column */}
              <div className="md:col-span-2">
                <Image 
                  src="/promot-logo.png" 
                  alt="Promot Logo" 
                  width={160} 
                  height={53}
                  className="h-12 w-auto mb-6 brightness-0 invert"
                />
                <p className="text-gray-400 leading-relaxed mb-6">
                  Transforming businesses through headless WordPress solutions. Fast, reliable, and built for growth.
                </p>
                <div className="flex space-x-4">
                  <a href="https://linktr.ee/Promot" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                    <span className="text-white">🔗</span>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-bold mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="#problem" className="text-gray-400 hover:text-white transition-colors">
                      The Problem
                    </Link>
                  </li>
                  <li>
                    <Link href="#solution" className="text-gray-400 hover:text-white transition-colors">
                      Solution
                    </Link>
                  </li>
                  <li>
                    <Link href="#process" className="text-gray-400 hover:text-white transition-colors">
                      Process
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-lg font-bold mb-6">Get Started</h3>
                <p className="text-gray-400 mb-4">
                  Ready to transform your WordPress site?
                </p>
                <a 
                  href="#contact" 
                  className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all"
                >
                  Start Your Pilot →
                </a>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-gray-400 text-sm text-center md:text-left">
                  &copy; {new Date().getFullYear()} Promot Technologies. All rights reserved.
                  <br className="md:hidden" />
                  <span className="md:ml-2">A digital marketing division of S.K.A.T. (S.K. Agri-Tech Pvt. Ltd.)</span>
                </p>
                <div className="flex space-x-6 text-sm">
                  <a href="https://www.promot.co.in" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    Main Site
                  </a>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Privacy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-in;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Layout;