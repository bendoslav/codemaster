import React, { useState } from 'react'
import { HiCode } from 'react-icons/hi'
import { FaGoogle, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-4">
      {/* Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative bg-[#1A1A1A]/80 backdrop-blur-xl p-8 rounded-2xl w-full max-w-md border border-white/10">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white mb-8 hover:opacity-80 transition-opacity">
          <HiCode className="text-3xl text-purple-500" />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            CodeMaster
          </span>
        </Link>

        {/* Přepínač Login/Registrace */}
        <div className="flex gap-2 mb-8 bg-[#0A0A0A] p-1 rounded-lg">
          {['Přihlášení', 'Registrace'].map((text, index) => (
            <button
              key={text}
              onClick={() => setIsLogin(index === 0)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                (index === 0 ? isLogin : !isLogin)
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {text}
            </button>
          ))}
        </div>

        <form className="space-y-4">
          {!isLogin && (
            <div className="space-y-1">
              <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                Jméno
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Zadejte své jméno"
              />
            </div>
          )}
          
          <div className="space-y-1">
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 transition-colors"
              placeholder="vas@email.cz"
            />
          </div>
          
          <div className="space-y-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-400">
              Heslo
            </label>
            <input
              type="password"
              id="password"
              className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            {isLogin ? 'Přihlásit se' : 'Registrovat se'}
          </button>
        </form>

        {/* Oddělovač */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-white/10"></div>
          <span className="px-4 text-sm text-gray-400">nebo pokračujte s</span>
          <div className="flex-1 border-t border-white/10"></div>
        </div>

        {/* Sociální přihlášení */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: FaGoogle, text: 'Google' },
            { icon: FaGithub, text: 'GitHub' }
          ].map(({ icon: Icon, text }) => (
            <button
              key={text}
              className="flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0A0A0A] border border-white/10 rounded-lg text-white hover:bg-white/5 transition-colors group"
            >
              <Icon className="group-hover:scale-110 transition-transform" />
              <span>{text}</span>
            </button>
          ))}
        </div>

        {/* Zapomenuté heslo */}
        {isLogin && (
          <button className="w-full text-sm text-gray-400 hover:text-white transition-colors mt-4">
            Zapomněli jste heslo?
          </button>
        )}
      </div>
    </div>
  )
}

export default Auth 