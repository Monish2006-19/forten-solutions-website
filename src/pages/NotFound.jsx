import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-[#0A1128] font-sans flex flex-col items-center justify-center px-8">
      <div className="text-center max-w-lg">
        <div className="text-[120px] md:text-[160px] font-extrabold text-gray-100 leading-none select-none mb-0">
          404
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0A1128] mb-4 -mt-4">
          Page Not Found
        </h1>
        <p className="text-gray-500 text-base leading-relaxed mb-10">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-[#0066FF] hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            to="/consultation"
            className="border border-gray-200 hover:border-[#0066FF] text-[#0A1128] hover:text-[#0066FF] px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Book a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
