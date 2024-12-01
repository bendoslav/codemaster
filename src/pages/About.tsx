import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';

const About = () => {
  const technologies = [
    { name: "React & Next.js", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "Git & GitHub", icon: <FaGithub className="text-white" /> }
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#0B0A10] text-gray-200 overflow-x-hidden">
      {/* Gradient overlay a světelné efekty */}
      <div className="fixed top-40 left-[10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]"></div>
      <div className="fixed top-60 right-[10%] w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px]"></div>

      <div className="relative w-full max-w-[1280px] mx-auto py-32 px-4 z-10">
        <h1 className="text-5xl font-semibold mb-16 text-center relative">
          <span className="bg-gradient-to-r from-purple-400 to-violet-500 text-transparent bg-clip-text">
            O CodeMaster
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          <div className="bg-[#13111C]/50 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-purple-900/20
                        hover:shadow-[0_0_30px_-15px_rgba(149,76,233,0.3)] transition-all duration-300">
            <h2 className="text-2xl font-semibold text-purple-300 mb-6">Naše vize</h2>
            <p className="text-gray-300 leading-relaxed font-light tracking-wide text-sm lg:text-base">
              Jsme tým nadšených programátorů a mentorů s vášní pro výuku. 
              Naším posláním je zpřístupnit programování všem, kdo mají zájem se učit.
              Věříme, že každý má potenciál stát se programátorem, pokud dostane správné
              vedení a podporu na své cestě.
            </p>
          </div>
          
          <div className="bg-[#13111C]/50 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-purple-900/20
                        hover:shadow-[0_0_30px_-15px_rgba(149,76,233,0.3)] transition-all duration-300">
            <h2 className="text-2xl font-semibold text-purple-300 mb-6">Proč my?</h2>
            <ul className="space-y-4 font-light">
              <li className="flex items-center space-x-3">
                <span className="text-purple-400 text-xl flex-shrink-0">⚡</span>
                <span className="text-gray-300 text-sm lg:text-base">Moderní přístup k výuce programování</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-purple-400 text-xl flex-shrink-0">🎯</span>
                <span className="text-gray-300 text-sm lg:text-base">Individuální přístup ke každému studentovi</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-purple-400 text-xl flex-shrink-0">💻</span>
                <span className="text-gray-300 text-sm lg:text-base">Praktické projekty z reálného světa</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-purple-400 text-xl flex-shrink-0">🚀</span>
                <span className="text-gray-300 text-sm lg:text-base">Podpora i po dokončení kurzu</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#13111C]/50 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-purple-900/20
                        hover:shadow-[0_0_30px_-15px_rgba(149,76,233,0.3)] transition-all duration-300">
            <h2 className="text-2xl font-semibold text-purple-300 mb-6">Naše metody</h2>
            <p className="text-gray-300 leading-relaxed font-light tracking-wide text-sm lg:text-base">
              Kombinujeme nejmodernější technologie s osvědčenými metodami výuky.
              Využíváme interaktivní výukové materiály, video tutoriály, live coding
              sessions a pravidelné konzultace. Naši studenti pracují na reálných
              projektech pod vedením zkušených mentorů.
            </p>
          </div>

          <div className="bg-[#13111C]/50 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-purple-900/20
                        hover:shadow-[0_0_30px_-15px_rgba(149,76,233,0.3)] transition-all duration-300">
            <h2 className="text-2xl font-semibold text-purple-300 mb-6">Technologie</h2>
            <div className="grid grid-cols-2 gap-6 text-gray-300 font-light">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="text-xl transform group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <span className="text-sm lg:text-base group-hover:text-purple-300 transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 