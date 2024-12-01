import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Webové aplikace",
      description: "Naučíme vás vytvářet moderní webové aplikace pomocí React, Next.js a TypeScript",
      icon: "🌐",
      features: ["React & Next.js", "TypeScript", "TailwindCSS", "REST API"]
    },
    {
      title: "Backend vývoj",
      description: "Zvládněte backend development s Node.js a Python frameworky",
      icon: "⚡",
      features: ["Node.js", "Express", "Python", "Databáze"]
    },
    {
      title: "Mobile Development",
      description: "Vyvíjejte mobilní aplikace pomocí React Native a Flutter",
      icon: "📱",
      features: ["React Native", "Flutter", "iOS", "Android"]
    },
    {
      title: "DevOps & Cloud",
      description: "Naučte se pracovat s cloudem a DevOps nástroji",
      icon: "☁️",
      features: ["Docker", "AWS", "CI/CD", "Git"]
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#0B0A10] text-gray-200 overflow-x-hidden">
      {/* Gradient overlay a světelné efekty - upraveny pozice */}
      <div className="fixed top-40 left-[10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]"></div>
      <div className="fixed top-60 right-[10%] w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px]"></div>

      <div className="relative w-full max-w-[1280px] mx-auto py-32 px-4 z-10">
        <h1 className="text-5xl font-semibold mb-16 text-center relative">
          <span className="bg-gradient-to-r from-purple-400 to-violet-500 text-transparent bg-clip-text">
            Naše Kurzy
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
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 font-light tracking-wide">
          Vyberte si z našich specializovaných kurzů a nastartujte svou kariéru v IT.
          Všechny kurzy vedou zkušení mentoři z praxe.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-[#13111C]/50 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-purple-900/20
                         hover:shadow-[0_0_30px_-15px_rgba(149,76,233,0.3)] transition-all duration-300"
            >
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h2 className="text-xl font-semibold text-purple-300 mb-4">{service.title}</h2>
              <p className="text-gray-400 mb-6 font-light tracking-wide text-sm lg:text-base">
                {service.description}
              </p>
              
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm">
                    <span className="text-purple-400 flex-shrink-0">▪</span>
                    <span className="text-gray-300 font-light">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="mt-6 w-full py-2 px-4 rounded-xl bg-purple-900/20 text-purple-300 
                               border border-purple-900/30 hover:bg-purple-900/30 transition-colors 
                               duration-300 font-medium tracking-wide text-sm lg:text-base">
                Více informací
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6 font-light">
            Nevíte si rady s výběrem kurzu? Kontaktujte nás!
          </p>
          <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-700 
                           text-white font-medium hover:from-purple-500 hover:to-violet-600 
                           transition-all duration-300 shadow-lg shadow-purple-500/20
                           hover:shadow-purple-500/40">
            Nezávazná konzultace
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services; 