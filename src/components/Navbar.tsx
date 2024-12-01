import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiCode } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', label: 'Domů' },
    { path: '/about', label: 'O nás' },
    { path: '/services', label: 'Kurzy' },
    { path: '/contact', label: 'Kontakt' }
  ]

  // Vylepšený Hamburger menu button
  const MenuButton = () => (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="relative w-8 h-8 md:hidden flex items-center justify-center"
    >
      <div className="relative w-6 h-6">
        {/* Animated lines */}
        <motion.span
          animate={isOpen 
            ? { rotate: 45, y: 0, top: "50%", translateY: "-50%" } 
            : { rotate: 0, y: 0, top: "25%" }
          }
          transition={{ duration: 0.3 }}
          className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
        />
        <motion.span
          animate={isOpen 
            ? { opacity: 0, x: -8 } 
            : { opacity: 1, x: 0 }
          }
          transition={{ duration: 0.3 }}
          className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
        />
        <motion.span
          animate={isOpen 
            ? { rotate: -45, y: 0, top: "50%", translateY: "-50%" } 
            : { rotate: 0, y: 0, top: "75%" }
          }
          transition={{ duration: 0.3 }}
          className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
        />
      </div>
    </button>
  )

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-4' : 'py-6'
        }`}
      >
        {/* Glassmorphism Background */}
        <div className={`absolute inset-0 transition-all duration-300 ${
          scrolled || isOpen
            ? 'bg-[#0A0A0A]/80 backdrop-blur-lg border-b border-white/10'
            : 'bg-transparent'
        }`} />

        <div className="max-w-[1280px] mx-auto px-4">
          <div className="relative flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/"
              className="flex items-center gap-2 group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <HiCode className="text-3xl text-purple-500" />
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text group-hover:from-pink-400 group-hover:to-purple-400 transition-all duration-300">
                CodeMaster
              </span>
            </Link>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map(({ path, label }) => {
                const isActive = location.pathname === path
                return (
                  <Link
                    key={path}
                    to={path}
                    className="relative px-4 py-2 group"
                  >
                    {/* Text */}
                    <span className={`relative z-10 text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-400 group-hover:text-white'
                    }`}>
                      {label}
                    </span>

                    {/* Liquid Background Effect */}
                    <div className="absolute inset-0 overflow-hidden rounded-lg">
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute inset-0"
                        >
                          {/* Liquid Blob */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 backdrop-blur-sm"
                            animate={{
                              scale: [1, 1.1, 1],
                              opacity: [0.5, 0.7, 0.5]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />

                          {/* Animated Gradient Overlay */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/20 to-purple-500/10"
                            animate={{
                              x: ['-100%', '100%']
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />

                          {/* Liquid Drops */}
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-2 h-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-sm"
                              initial={{
                                x: Math.random() * 100,
                                y: Math.random() * 40 - 20,
                                scale: 0
                              }}
                              animate={{
                                x: Math.random() * 100,
                                y: Math.random() * 40 - 20,
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.4,
                                ease: "easeInOut"
                              }}
                            />
                          ))}

                          {/* Bottom Pool Effect */}
                          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-purple-500/20 to-transparent" />
                          
                          {/* Ripple Effects */}
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute bottom-0 left-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"
                              initial={{ x: '-50%', scale: 0, opacity: 0 }}
                              animate={{
                                scale: [0, 2],
                                opacity: [0.5, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.6,
                                ease: "easeOut"
                              }}
                            />
                          ))}
                        </motion.div>
                      )}
                    </div>

                    {/* Hover Overlay */}
                    <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                      !isActive && 'group-hover:bg-white/5'
                    }`} />
                  </Link>
                )
              })}
            </div>

            {/* Auth Button - Desktop */}
            <div className="hidden md:flex items-center">
              <Link
                to="/auth"
                className="group relative px-6 py-2"
              >
                {/* Main Container */}
                <div className="relative flex items-center gap-3 bg-[#1A1A1A] rounded-lg border border-white/5 px-4 py-2
                              before:absolute before:inset-0 before:rounded-lg before:border before:border-white/5 before:scale-[1.02]
                              before:transition-transform before:duration-300 group-hover:before:scale-105">
                  
                  {/* Glowing Corner Dots */}
                  <div className="absolute -left-0.5 -top-0.5 w-1.5 h-1.5 bg-purple-500 rounded-full blur-[2px]" />
                  <div className="absolute -right-0.5 -bottom-0.5 w-1.5 h-1.5 bg-pink-500 rounded-full blur-[2px]" />
                  
                  {/* Scan Line Effect */}
                  <motion.div
                    className="absolute inset-0 overflow-hidden rounded-lg"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <motion.div
                      className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      animate={{ x: ['-200%', '400%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>

                  {/* Icon */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-md" />
                    <div className="relative z-10 w-5 h-5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full
                                  border border-white/10 flex items-center justify-center">
                      <HiCode className="w-3 h-3 text-white/80" />
                    </div>
                  </div>

                  {/* Text */}
                  <span className="relative text-sm font-medium text-white/90">
                    Dashboard
                  </span>

                  {/* Corner Lines */}
                  <div className="absolute left-0 top-0 w-2 h-px bg-gradient-to-r from-purple-500 to-transparent" />
                  <div className="absolute left-0 top-0 h-2 w-px bg-gradient-to-b from-purple-500 to-transparent" />
                  <div className="absolute right-0 bottom-0 w-2 h-px bg-gradient-to-l from-pink-500 to-transparent" />
                  <div className="absolute right-0 bottom-0 h-2 w-px bg-gradient-to-t from-pink-500 to-transparent" />

                  {/* Hover Effects */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10" />
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDAgTCAyMCAwIE0gMCAwIEwgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
                  </div>
                </div>

                {/* Outer Glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
              </Link>
            </div>

            {/* Hamburger Menu Button */}
            <MenuButton />
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[72px] z-40 md:hidden"
          >
            {/* Glassmorphism Background */}
            <div className="absolute inset-0 bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/10" />

            {/* Content Container */}
            <div className="relative max-w-[1280px] mx-auto">
              <div className="p-4 space-y-2">
                {/* Navigation Items */}
                {navItems.map(({ path, label }, i) => {
                  const isActive = location.pathname === path
                  return (
                    <motion.div
                      key={path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        to={path}
                        onClick={() => setIsOpen(false)}
                        className="group relative block"
                      >
                        {/* Item Container */}
                        <div className="relative overflow-hidden p-3 rounded-xl">
                          {/* Background */}
                          <div className={`absolute inset-0 transition-colors duration-300 ${
                            isActive 
                              ? 'bg-white/10' 
                              : 'bg-[#1A1A1A]/40 group-hover:bg-white/5'
                          }`} />

                          {/* Scan Line */}
                          <motion.div
                            className="absolute inset-0"
                            initial={false}
                            animate={{
                              opacity: isActive ? [0.3, 0.5, 0.3] : 0
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <motion.div
                              className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                              animate={{ x: ['-200%', '400%'] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />
                          </motion.div>

                          {/* Content */}
                          <div className="relative flex items-center gap-3">
                            {/* Active Indicator */}
                            {isActive && (
                              <div className="absolute left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                            )}
                            
                            {/* Label */}
                            <span className={`pl-3 font-medium transition-colors duration-300 ${
                              isActive
                                ? 'text-white'
                                : 'text-gray-400 group-hover:text-white'
                            }`}>
                              {label}
                            </span>

                            {/* Hover Arrow */}
                            <motion.div
                              className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                              animate={{ x: [0, 4, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <div className="w-4 h-4 border-t-2 border-r-2 border-purple-500/50 rotate-45" />
                            </motion.div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}

                {/* Mobile Dashboard Button */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-4 mt-2 border-t border-white/10"
                >
                  <Link
                    to="/auth"
                    onClick={() => setIsOpen(false)}
                    className="group relative block overflow-hidden rounded-xl"
                  >
                    {/* Button Container */}
                    <div className="relative p-4 bg-[#1A1A1A] border border-white/10">
                      {/* Corner Dots */}
                      <div className="absolute -left-0.5 -top-0.5 w-1.5 h-1.5 bg-purple-500 rounded-full blur-[2px]" />
                      <div className="absolute -right-0.5 -bottom-0.5 w-1.5 h-1.5 bg-pink-500 rounded-full blur-[2px]" />

                      {/* Content */}
                      <div className="relative flex items-center justify-center gap-3">
                        {/* Icon */}
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-md" />
                          <div className="relative w-5 h-5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full
                                        border border-white/10 flex items-center justify-center">
                            <HiCode className="w-3 h-3 text-white/80" />
                          </div>
                        </div>

                        {/* Text */}
                        <span className="font-medium text-white">
                          Dashboard
                        </span>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10" />
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDAgTCAyMCAwIE0gMCAwIEwgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar