'use client'

import { useState, useEffect } from 'react'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import Navigation from '@/components/Navigation'
import CursorFollower from '@/components/CursorFollower'
import ThemeToggle from '@/components/ThemeToggle'

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    
    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <main className={`min-h-screen transition-all duration-500 ${
      isDark 
        ? 'animated-gradient-dark bg-dark-900' 
        : 'animated-gradient bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      {/* Enhanced Background Elements */}
      <div className={`fixed inset-0 ${isDark ? 'mesh-gradient-dark' : 'mesh-gradient'} opacity-20`} />
      <div className={`fixed inset-0 ${isDark ? 'hero-pattern-dark' : 'hero-pattern'}`} />
      <div className="fixed inset-0 bg-dots opacity-30" />
      
      {/* Floating Shapes */}
      <div className="floating-shapes fixed inset-0 pointer-events-none" />
      
      <CursorFollower />
      <Navigation />
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
