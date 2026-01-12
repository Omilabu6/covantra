import { ArrowRight, Home} from 'lucide-react';
import Navbar from './Navbar';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';



export default function NotFound() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-6 pt-24 pb-16">
        <div className="max-w-3xl text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="font-serif text-9xl md:text-[12rem] font-bold text-orange-500 leading-none">
              404
            </h1>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
            Page <span className="italic">not found.</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>

          {/* CTA Buttons */}
          <div to='' className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            <Link to="/" className="inline-flex items-center px-8 py-4 bg-orange-500 text-white text-lg font-medium rounded-lg hover:bg-orange-600 transition-colors group">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
            
            <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-transparent text-orange-500 text-lg font-medium rounded-lg border-2 border-orange-500 hover:bg-orange-50 transition-colors">
              Contact Support
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">You might be looking for:</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#" className="text-orange-500 hover:text-orange-600 font-medium transition-colors">
                About Us
              </a>
              <span className="text-gray-300">•</span>
              <a href="#" className="text-orange-500 hover:text-orange-600 font-medium transition-colors">
                Services
              </a>
              <span className="text-gray-300">•</span>
              <a href="#" className="text-orange-500 hover:text-orange-600 font-medium transition-colors">
                Legal
              </a>
              <span className="text-gray-300">•</span>
              <a href="#" className="text-orange-500 hover:text-orange-600 font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}