import React from 'react'
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaPlay, FaStar, FaUserGraduate, FaTrophy } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiTailwindcss } from 'react-icons/si'
import { BsLightningChargeFill, BsClock, BsPeople, BsCheckCircleFill } from 'react-icons/bs'
import { PiCertificateBold } from 'react-icons/pi'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import Typewriter from 'typewriter-effect'

export default function Home() {
  const navigate = useNavigate();
  
  return (
      <div className="min-h-screen bg-[#0A0A0A]">
        <Navbar />
        {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-purple-500/10 text-purple-400 px-4 py-1 rounded-full text-sm font-medium">
                +15,000 studentů
              </span>
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <img key={i} className="w-8 h-8 rounded-full border-2 border-black" src={`https://i.pravatar.cc/100?img=${i}`} alt="Student" />
                ))}
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight relative">
              Staňte se{' '}
              <span className="relative inline-block">
                <div className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                  <Typewriter
                    options={{
                      strings: ['profesionálním', 'úspěšným', 'fullstack', 'frontend', 'backend'],
                      autoStart: true,
                      loop: true,
                      delay: 80,
                      deleteSpeed: 50,
                      wrapperClassName: "bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text",
                      cursor: '|',
                      cursorClassName: "text-purple-400 animate-blink !w-[1px] !font-extralight opacity-70"
                    }}
                  />
                </div>
                <svg 
                  className="absolute -bottom-1 left-0 w-full h-3" 
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
                  >
                    <animate 
                      attributeName="d" 
                      dur="4s" 
                      repeatCount="indefinite"
                      values="
                        M2 8.5C2 8.5 91.5 3.5 153.5 3.5C215.5 3.5 250 10.5 309.5 10.5C369 10.5 398 3 398 3;
                        M2 3C2 3 91.5 10.5 153.5 10.5C215.5 10.5 250 3.5 309.5 3.5C369 3.5 398 8.5 398 8.5;
                        M2 8.5C2 8.5 91.5 3.5 153.5 3.5C215.5 3.5 250 10.5 309.5 10.5C369 10.5 398 3 398 3"
                      calcMode="spline"
                      keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                    />
                  </path>
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
                      <stop offset="0.5" stopColor="#EC4899" />
                      <stop offset="1" stopColor="#A855F7" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute -bottom-1 left-0 w-full h-3 blur-sm opacity-50">
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
                        <stop offset="0.5" stopColor="#EC4899" />
                        <stop offset="1" stopColor="#A855F7" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </span>{' '}
              vývojářem
            </h1>
            
            <p className="text-xl text-gray-400 mb-8">
              Kompletní kurz od nuly až po první práci v IT. Reálné projekty, moderní technologie a mentoring od profesionálů.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <button onClick={() => navigate('/auth')} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-all flex items-center gap-2">
                <FaPlay className="text-sm" />
                Začít zdarma
              </button>
              <button className="bg-white/5 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all border border-white/10">
                Prohlédnout syllabus
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[
                { 
                  number: '15K+', 
                  text: 'Studentů',
                  icon: <FaUserGraduate className="text-purple-400 text-2xl mb-2" />
                },
                { 
                  number: '4.9/5', 
                  text: 'Hodnocení',
                  icon: <FaStar className="text-yellow-400 text-2xl mb-2" />
                },
                { 
                  number: '96%', 
                  text: 'Úspěšnost',
                  icon: <FaTrophy className="text-purple-400 text-2xl mb-2" />
                },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/10">
                  {stat.icon}
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-gray-400">{stat.text}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-30"></div>
              <div className="relative bg-[#1A1A1A] rounded-2xl p-8 border border-white/10">
                <div className="aspect-video w-full rounded-lg mb-6 overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/bMknfKXIFA8"
                    title="Ukázka kurzu"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-yellow-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span className="text-white ml-2">5.0</span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-gray-400">
                    <div className="flex items-center gap-2">
                      <FaUserGraduate />
                      <span>15,000+ studentů</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BsClock />
                      <span>50+ hodin</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <PiCertificateBold className="text-purple-400 text-xl" />
                    <span className="text-white">Certifikát o absolvování</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proč náš kurz */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proč zvolit náš kurz?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Náš kurz je navržen tak, aby vám poskytl vše potřebné pro start kariéry v IT
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Praktické projekty',
                description: '8 reálných projektů do portfolia',
                icon: BsLightningChargeFill,
                items: ['E-shop', 'Social média', 'Dashboard']
              },
              {
                title: 'Osobní mentoring',
                description: 'Přímá podpora od profesionálů',
                icon: BsPeople,
                items: ['1-on-1 konzultace', 'Code review', 'Kariérní poradenství']
              },
              {
                title: 'Garance úspěchu',
                description: 'Vrátíme vám peníze pokud nebudete spokojeni',
                icon: BsCheckCircleFill,
                items: ['60 dní na vyzkoušení', 'Lifetime přístup', 'Aktualizovaný obsah']
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#0A0A0A] p-8 rounded-xl border border-white/10 hover:border-purple-500/50 transition-colors"
              >
                <feature.icon className="text-purple-400 text-3xl mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <BsCheckCircleFill className="text-purple-400 text-sm" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologie - zkrácená verze pro ukázku */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologie které ovládnete
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Naučíme vás nejžádanější technologie na trhu
            </p>
          </div>
          
          {/* ... zbytek kódu pro technologie ... */}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Jednoduchý a transparentní ceník
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Vyberte si plán, který vám nejvíce vyhovuje. Všechny plány obsahují přístup k základním materiálům.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Základní',
                price: '2 990 Kč',
                description: 'Perfektní pro začátečníky',
                features: [
                  'Přístup ke všem základním kurzům',
                  'Komunitní Discord',
                  'Základní projekty',
                  'Certifikát o dokončení',
                ],
                highlighted: false,
                cta: 'Vybrat plán'
              },
              {
                name: 'Profesionál',
                price: '4 990 Kč',
                description: 'Nejpopulárnější volba',
                features: [
                  'Vše ze Základního plánu',
                  '4 hodiny 1-on-1 mentoringu',
                  'Pokročilé projekty',
                  'Code review',
                  'LinkedIn profil review',
                  'Kariérní poradenství'
                ],
                highlighted: true,
                cta: 'Začít ihned'
              },
              {
                name: 'Kariéra',
                price: '9 990 Kč',
                description: 'Pro maximální podporu',
                features: [
                  'Vše z Profesionál plánu',
                  '12 hodin 1-on-1 mentoringu',
                  'Garance práce',
                  'Mock interviews',
                  'Portfolio review',
                  'Doživotní přístup'
                ],
                highlighted: false,
                cta: 'Kontaktovat'
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative ${
                  plan.highlighted 
                    ? 'bg-gradient-to-b from-purple-500/10 to-pink-500/10 border-purple-500/20' 
                    : 'bg-[#0A0A0A] border-white/10'
                } rounded-2xl p-8 border hover:border-purple-500/50 transition-colors`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Nejoblíbenější
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">/jednorázově</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <svg 
                        className={`w-5 h-5 mt-0.5 ${
                          plan.highlighted ? 'text-purple-400' : 'text-gray-400'
                        }`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-3 px-4 rounded-xl font-semibold transition-all ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105'
                      : 'bg-white/5 text-white hover:bg-white/10'
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-400">
              Potřebujete specifický plán pro váš tým nebo firmu?{' '}
              <a href="/contact" className="text-purple-400 hover:text-purple-300 transition-colors">
                Kontaktujte nás pro firemní řešení
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-30"></div>
          <div className="relative bg-[#1A1A1A] rounded-2xl p-12 text-center border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Začněte svou cestu ještě dnes
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Připojte se k tisícům úspěšných absolventů. První lekce zdarma.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => navigate('/auth')} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-all">
                Začít zdarma
              </button>
              <button className="bg-white/5 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all border border-white/10">
                Zobrazit syllabus
              </button>
            </div>
          </div>
       </div>
      </section>
    </div>
    
  )
} 