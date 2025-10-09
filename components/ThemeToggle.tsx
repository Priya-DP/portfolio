'use client'

import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

interface ThemeToggleProps {
  isDark: boolean
  toggleTheme: () => void
}

export default function ThemeToggle({ isDark, toggleTheme }: ThemeToggleProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed top-24 right-6 z-40 p-3 bg-white dark:bg-dark-800 rounded-full shadow-lg border border-gray-200 dark:border-dark-700 hover:shadow-xl transition-all duration-300"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-yellow-500" />
        ) : (
          <Moon className="w-5 h-5 text-gray-700" />
        )}
      </motion.div>
    </motion.button>
  )
}





