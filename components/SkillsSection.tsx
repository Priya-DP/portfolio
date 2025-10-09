'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Palette, Globe, Smartphone, Server, Sparkles, Zap, Target } from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Palette,
    skills: [
      { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
      { name: 'Next.js', level: 90, color: 'from-gray-800 to-gray-900' },
      { name: 'TypeScript', level: 88, color: 'from-blue-600 to-blue-700' },
      { name: 'Tailwind CSS', level: 92, color: 'from-cyan-500 to-blue-500' },
      { name: 'HTML/CSS', level: 95, color: 'from-orange-500 to-red-500' },
    ]
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 85, color: 'from-green-500 to-green-600' },
      { name: 'Express.js', level: 80, color: 'from-gray-600 to-gray-700' },
      { name: 'PostgreSQL', level: 82, color: 'from-blue-500 to-indigo-600' },
      { name: 'Drizzle ORM', level: 78, color: 'from-purple-500 to-pink-500' },
      { name: 'REST APIs', level: 90, color: 'from-green-400 to-green-500' },
    ]
  },
  {
    title: 'Tools & Others',
    icon: Code,
    skills: [
      { name: 'Git/GitHub', level: 88, color: 'from-orange-600 to-red-600' },
      { name: 'Docker', level: 75, color: 'from-blue-500 to-blue-600' },
      { name: 'AWS', level: 70, color: 'from-yellow-500 to-orange-500' },
      { name: 'Figma', level: 72, color: 'from-purple-500 to-pink-500' },
      { name: 'Testing', level: 80, color: 'from-green-500 to-emerald-500' },
    ]
  }
]

const technologies = [
  { name: 'React', icon: '⚛️', color: 'hover:bg-blue-100 dark:hover:bg-blue-900/20' },
  { name: 'Next.js', icon: '▲', color: 'hover:bg-gray-100 dark:hover:bg-gray-800' },
  { name: 'TypeScript', icon: 'TS', color: 'hover:bg-blue-100 dark:hover:bg-blue-900/20' },
  { name: 'Tailwind', icon: '🎨', color: 'hover:bg-cyan-100 dark:hover:bg-cyan-900/20' },
  { name: 'Node.js', icon: '🟢', color: 'hover:bg-green-100 dark:hover:bg-green-900/20' },
  { name: 'PostgreSQL', icon: '🐘', color: 'hover:bg-blue-100 dark:hover:bg-blue-900/20' },
  { name: 'Drizzle', icon: '❄️', color: 'hover:bg-purple-100 dark:hover:bg-purple-900/20' },
  { name: 'Git', icon: '📝', color: 'hover:bg-orange-100 dark:hover:bg-orange-900/20' },
]

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-dark-900 dark:via-dark-800/50 dark:to-dark-900" />
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-32 left-20 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Zap className="w-8 h-8 text-yellow-500" />
            <h2 className="text-4xl md:text-6xl font-bold">
              My <span className="bg-gradient-to-r from-primary-500 via-purple-600 to-pink-600 bg-clip-text text-transparent">Skills</span>
            </h2>
            <Zap className="w-8 h-8 text-yellow-500" />
          </div>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Enhanced Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card dark:glass-card-dark p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/20 dark:border-dark-600/50 hover:shadow-3xl transition-all duration-500"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-4 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl shadow-lg">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-base font-semibold text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-3 shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05, ease: "easeOut" }}
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.color} shadow-lg`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Technology Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-10">
            <Target className="w-8 h-8 text-primary-500" />
            <h3 className="text-3xl md:text-4xl font-bold">
              Technologies I <span className="bg-gradient-to-r from-primary-500 to-purple-600 bg-clip-text text-transparent">Work With</span>
            </h3>
            <Target className="w-8 h-8 text-primary-500" />
          </div>
          
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6 max-w-5xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.15, y: -8, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`glass-card dark:glass-card-dark p-6 rounded-2xl border border-white/20 dark:border-dark-600/50 cursor-pointer transition-all duration-300 backdrop-blur-sm hover:shadow-2xl ${tech.color}`}
              >
                <div className="text-center">
                  <div className="text-3xl mb-3">{tech.icon}</div>
                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {tech.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { icon: Globe, title: 'Web Development', description: 'Full-stack web applications' },
            { icon: Smartphone, title: 'Mobile First', description: 'Responsive design approach' },
            { icon: Database, title: 'Database Design', description: 'SQL & NoSQL databases' },
            { icon: Code, title: 'Clean Code', description: 'Best practices & patterns' },
          ].map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="glass-card dark:glass-card-dark text-center p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-white/20 dark:border-dark-600/50 hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <skill.icon className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                {skill.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}




