'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Briefcase, GraduationCap, Sparkles, Award, Target } from 'lucide-react'

const timelineData = [
  {
    year: '2023 - Present',
    title: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    description: 'Leading development of enterprise web applications using React, Next.js, and Node.js.',
    icon: Briefcase,
  },
  {
    year: '2021 - 2023',
    title: 'Full Stack Developer',
    company: 'Digital Innovations',
    description: 'Built and maintained multiple client projects with modern web technologies.',
    icon: Briefcase,
  },
  {
    year: '2019 - 2021',
    title: 'Frontend Developer',
    company: 'Web Studio',
    description: 'Specialized in creating responsive and interactive user interfaces.',
    icon: Briefcase,
  },
  {
    year: '2015 - 2019',
    title: 'Computer Science Degree',
    company: 'University of Technology',
    description: 'Graduated with honors in Computer Science and Software Engineering.',
    icon: GraduationCap,
  },
]

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white/90 to-blue-50/80 dark:from-dark-800/90 dark:via-dark-700/95 dark:to-dark-800/90" />
      <div className="absolute inset-0 bg-dots opacity-20" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-yellow-500" />
            <h2 className="text-4xl md:text-6xl font-bold">
              About <span className="bg-gradient-to-r from-primary-500 via-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <Sparkles className="w-8 h-8 text-yellow-500" />
          </div>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Passionate about technology and innovation, I create digital solutions that make a difference.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Enhanced profile image container */}
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400/80 to-purple-500/80 animate-pulse" />
                <span className="relative z-10">D</span>
              </div>
              
              {/* Enhanced floating elements */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Award className="w-6 h-6 text-white" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Target className="w-5 h-5 text-white" />
              </motion.div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
            </div>
          </motion.div>

          {/* Enhanced About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
              Full Stack Developer & <span className="text-primary-500">Problem Solver</span>
            </h3>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with over 4 years of experience in building 
              modern web applications. I love turning complex problems into simple, beautiful, 
              and intuitive solutions.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>

            {/* Enhanced Quick Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="glass-card dark:glass-card-dark p-4 rounded-xl backdrop-blur-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="font-semibold text-gray-800 dark:text-white">Remote / Worldwide</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card dark:glass-card-dark p-4 rounded-xl backdrop-blur-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Experience</p>
                    <p className="font-semibold text-gray-800 dark:text-white">4+ Years</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="bg-gradient-to-r from-primary-500 to-purple-600 bg-clip-text text-transparent">Journey</span>
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400">The path that shaped my expertise</p>
          </div>
          
          <div className="relative">
            {/* Enhanced Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 via-purple-500 to-pink-500" />
            
            <div className="space-y-16">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Enhanced Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full border-4 border-white dark:border-dark-800 z-10 shadow-lg" />
                  
                  {/* Enhanced Content */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-10' : 'lg:pl-10'}`}>
                    <div className="glass-card dark:glass-card-dark p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/20 dark:border-dark-600/50 hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-primary-500 bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-full">{item.year}</span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                        {item.title}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3 text-lg">
                        {item.company}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}




