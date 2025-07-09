
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles, Zap, Star } from 'lucide-react';
import { useRef } from 'react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Enhanced space background with advanced parallax */}
      <div className="absolute inset-0">
        {/* Deep space gradient base */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%),
              radial-gradient(ellipse at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 70%, rgba(147, 51, 234, 0.08) 0%, transparent 50%)
            `
          }}
        />

        {/* Parallax Layer 1 - Distant stars (slowest) */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: y1 }}
        >
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={`hero-distant-${i}`}
              className="absolute w-0.5 h-0.5 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.6 + 0.2
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
            />
          ))}
        </motion.div>

        {/* Parallax Layer 2 - Medium stars */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: y2 }}
        >
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={`hero-medium-${i}`}
              className="absolute w-1 h-1 bg-blue-200 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </motion.div>

        {/* Parallax Layer 3 - Close particles (fastest) */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: y3 }}
        >
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`hero-close-${i}`}
              className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -200, 0],
                x: [0, Math.sin(i) * 100, 0],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1.5, 0.5]
              }}
              transition={{
                duration: Math.random() * 25 + 20,
                repeat: Infinity,
                delay: Math.random() * 10,
              }}
            />
          ))}
        </motion.div>

        {/* Nebula with parallax */}
        <motion.div
          style={{ 
            y: y2,
            background: `conic-gradient(from 0deg at 50% 50%, transparent, rgba(59, 130, 246, 0.3), transparent, rgba(147, 51, 234, 0.2), transparent)`
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-20"
        />
      </div>

      {/* Glassmorphism floating cards with parallax */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl"
        style={{ y: y1 }}
        animate={{ 
          rotate: [0, 5, -5, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <Sparkles className="text-white/70 w-8 h-8" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-10 w-24 h-24 rounded-full backdrop-blur-lg bg-purple-500/20 border border-purple-300/30 shadow-2xl"
        style={{ y: y2 }}
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <Zap className="text-purple-300/80 w-6 h-6" />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-20 w-20 h-20 rounded-xl backdrop-blur-lg bg-blue-500/15 border border-blue-300/25 shadow-2xl"
        style={{ y: y3 }}
        animate={{ 
          rotate: [0, -8, 8, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <Star className="text-blue-300/70 w-5 h-5" />
        </div>
      </motion.div>

      {/* Main content with glassmorphism */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ opacity, scale }}
        className="text-center z-10 max-w-4xl mx-auto px-6"
      >
        <motion.div
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl"
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 25px 50px rgba(59, 130, 246, 0.2)"
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Abraham <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">Rivera</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Desarrollador Full Stack
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Especializado en Angular, .NET y arquitecturas escalables. 
            Transformando ideas en soluciones digitales innovadoras.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold backdrop-blur-sm border border-white/20"
            >
              Ver Proyectos
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 backdrop-blur-lg bg-white/10 text-white rounded-full font-semibold border border-white/30 hover:bg-white/20"
            >
              Contactarme
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="text-white/60 w-6 h-6" />
      </motion.div>

      {/* Special parallax card that appears on scroll up */}
      <motion.div
        className="fixed top-10 right-10 w-40 h-40 rounded-3xl backdrop-blur-2xl bg-gradient-to-br from-white/20 to-white/5 border border-white/30 shadow-2xl z-50"
        initial={{ opacity: 0, x: 100, rotate: -15 }}
        animate={{ 
          opacity: scrollYProgress.get() > 0.1 ? 1 : 0,
          x: scrollYProgress.get() > 0.1 ? 0 : 100,
          rotate: scrollYProgress.get() > 0.1 ? 0 : -15
        }}
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -200])
        }}
        whileHover={{ 
          scale: 1.1, 
          rotate: 5,
          boxShadow: "0 30px 60px rgba(59, 130, 246, 0.3)"
        }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center p-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="text-white/80 w-8 h-8 mb-2" />
          </motion.div>
          <span className="text-white/70 text-sm font-medium text-center">Scroll Magic</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
