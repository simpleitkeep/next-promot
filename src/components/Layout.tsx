import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

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
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center space-x-3">
                <Image 
                  src="/PROMOT logo-Black and white.png" 
                  alt="Promot Logo" 
                  width={120} 
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link href="#problem" className="text-gray-700 hover:text-gray-900 font-medium">
                  The Problem
                </Link>
                <Link href="#solution" className="text-gray-700 hover:text-gray-900 font-medium">
                  Our Solution
                </Link>
                <Link href="#process" className="text-gray-700 hover:text-gray-900 font-medium">
                  How It Works
                </Link>
                <Link href="#contact" className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  Start Pilot
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-16">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Promot</h3>
                <p className="text-gray-400">Headless WordPress solutions for modern brands</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Contact</h3>
                <p className="text-gray-400">Ready to transform your WordPress site?</p>
                <a href="#contact" className="text-blue-400 hover:text-blue-300">Get in touch →</a>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="#problem" className="hover:text-white">The Problem</Link></li>
                  <li><Link href="#solution" className="hover:text-white">Solution</Link></li>
                  <li><Link href="#process" className="hover:text-white">Process</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Promot. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;