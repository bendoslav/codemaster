import React from 'react';
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#0B0A10] text-gray-200 overflow-x-hidden">
      {/* Gradient overlay a světelné efekty */}
      <div className="fixed top-40 left-[10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]"></div>
      <div className="fixed top-60 right-[10%] w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px]"></div>

      <div className="relative w-full max-w-[1280px] mx-auto py-32 px-4 z-10">
        <h1 className="text-5xl font-semibold mb-16 text-center relative">
          <span className="bg-gradient-to-r from-purple-400 to-violet-500 text-transparent bg-clip-text">
            Kontaktujte nás
          </span>
          <svg 
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-3" 
            viewBox="0 0 400 12" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M2 8.5C2 8.5 91.5 3.5 153.5 3.5C215.5 3.5 250 10.5 309.5 10.5C369 10.5 398 3 398 3"
              stroke="url(#paint0_linear)" 
              strokeWidth="4" 
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-pulse-slow"
            />
            <defs>
              <linearGradient 
                id="paint0_linear" 
                x1="2" 
                y1="6" 
                x2="398" 
                y2="6" 
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#A855F7" />
                <stop offset="0.5" stopColor="#8B5CF6" />
                <stop offset="1" stopColor="#A855F7" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-3 blur-sm opacity-50">
            <svg 
              className="w-full h-full" 
              viewBox="0 0 400 12" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M2 8.5C2 8.5 91.5 3.5 153.5 3.5C215.5 3.5 250 10.5 309.5 10.5C369 10.5 398 3 398 3"
                stroke="url(#paint1_linear)" 
                strokeWidth="4" 
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient 
                  id="paint1_linear" 
                  x1="2" 
                  y1="6" 
                  x2="398" 
                  y2="6" 
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#A855F7" />
                  <stop offset="0.5" stopColor="#8B5CF6" />
                  <stop offset="1" stopColor="#A855F7" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </h1>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Kontaktní formulář */}
          <div className="bg-[#13111C]/50 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-purple-900/20
                         hover:shadow-[0_0_30px_-15px_rgba(149,76,233,0.3)] transition-all duration-300">
            <h2 className="text-2xl font-semibold text-purple-300 mb-8">Napište nám</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 text-sm">Jméno</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl bg-[#1A1727] border border-purple-900/20 
                           text-gray-200 focus:outline-none focus:border-purple-500 transition-colors
                           placeholder-gray-500"
                  placeholder="Vaše jméno"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 text-sm">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl bg-[#1A1727] border border-purple-900/20 
                           text-gray-200 focus:outline-none focus:border-purple-500 transition-colors
                           placeholder-gray-500"
                  placeholder="vas@email.cz"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 text-sm">Zpráva</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-[#1A1727] border border-purple-900/20 
                           text-gray-200 focus:outline-none focus:border-purple-500 transition-colors
                           placeholder-gray-500 resize-none"
                  placeholder="Vaše zpráva..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-xl font-medium
                         bg-gradient-to-r from-purple-600 to-violet-700 text-white
                         hover:from-purple-500 hover:to-violet-600
                         transition-all duration-300 shadow-lg shadow-purple-500/20
                         hover:shadow-purple-500/40"
              >
                Odeslat zprávu
              </button>
            </form>
          </div>

          {/* Kontaktní informace */}
          <div className="bg-[#13111C]/50 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-purple-900/20
                         hover:shadow-[0_0_30px_-15px_rgba(149,76,233,0.3)] transition-all duration-300">
            <h2 className="text-2xl font-semibold text-purple-300 mb-8">Kde nás najdete</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <HiOutlineLocationMarker className="text-2xl text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-gray-300 font-medium mb-1">Adresa</h3>
                  <p className="text-gray-400 leading-relaxed">
                    CodeMaster Campus<br />
                    Technologická 123<br />
                    160 00 Praha 6
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <HiOutlinePhone className="text-2xl text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-gray-300 font-medium mb-1">Telefon</h3>
                  <p className="text-gray-400">+420 777 888 999</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <HiOutlineMail className="text-2xl text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-gray-300 font-medium mb-1">Email</h3>
                  <p className="text-gray-400">info@codemaster.cz</p>
                </div>
              </div>

              {/* Mapa nebo další informace */}
              <div className="mt-8 p-4 bg-[#1A1727] rounded-xl border border-purple-900/20">
                <p className="text-gray-400 text-sm">
                  Jsme k dispozici každý všední den od 9:00 do 17:00. 
                  Můžete nás navštívit osobně nebo nás kontaktovat pomocí formuláře.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 