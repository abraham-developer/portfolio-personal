import { motion, useScroll, useTransform } from 'framer-motion';
import { User, Code, Trophy, Coffee, Star, Rocket, Atom, Globe } from 'lucide-react';
import { useRef } from 'react';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -160]);

  const stats = [
    { icon: Code, label: 'Proyectos Completados', value: '50+' },
    { icon: Trophy, label: 'Años de Experiencia', value: '5+' },
    { icon: Coffee, label: 'Tazas de Café', value: '∞' },
    { icon: Star, label: 'Clientes Satisfechos', value: '25+' }
  ];

  // Componente de bandera mexicana glassmorfismo
  const MexicanFlag = () => (
    <motion.div
      className="relative w-24 h-16 rounded-lg overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl"
      whileHover={{ 
        scale: 1.1, 
        y: -5,
        boxShadow: "0 25px 50px rgba(34, 197, 94, 0.3)"
      }}
      animate={{
        y: [0, -5, 0],
        boxShadow: [
          "0 10px 30px rgba(34, 197, 94, 0.2)",
          "0 20px 40px rgba(239, 68, 68, 0.2)",
          "0 10px 30px rgba(34, 197, 94, 0.2)"
        ]
      }}
      transition={{ 
        duration: 4, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
    >
      {/* Verde */}
      <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-b from-green-400/80 to-green-600/80 backdrop-blur-sm" />
      
      {/* Blanco con escudo */}
      <div className="absolute left-1/3 top-0 w-1/3 h-full bg-gradient-to-b from-white/90 to-gray-100/90 backdrop-blur-sm flex items-center justify-center">
        {/* Águila estilizada */}
        <motion.div
          className="text-amber-700 text-xs font-bold"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🦅
        </motion.div>
      </div>
      
      {/* Rojo */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-b from-red-400/80 to-red-600/80 backdrop-blur-sm" />
      
      {/* Efecto de brillo */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="py-20 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden"
    >
      {/* Enhanced space background with parallax */}
      <div className="absolute inset-0">
        {/* Deep space gradient */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              radial-gradient(ellipse at 30% 40%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 60%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 40% 80%, rgba(79, 70, 229, 0.1) 0%, transparent 50%)
            `
          }}
        />

        {/* Parallax Layer 1 - Distant stars */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: y1 }}
        >
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`about-distant-${i}`}
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
                duration: Math.random() * 5 + 3,
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
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`about-medium-${i}`}
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
                duration: Math.random() * 4 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </motion.div>

        {/* Parallax Layer 3 - Floating cosmic particles */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: y3 }}
        >
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`about-particles-${i}`}
              className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.sin(i) * 50, 0],
                opacity: [0, 0.7, 0],
                scale: [0.5, 1.3, 0.5]
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                delay: Math.random() * 8,
              }}
            />
          ))}
        </motion.div>

        {/* Enhanced nebula effect with parallax */}
        <motion.div
          style={{ 
            y: y2, 
            background: `conic-gradient(from 0deg at 60% 40%, transparent, rgba(59, 130, 246, 0.3), transparent, rgba(147, 51, 234, 0.2), transparent)`
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-15"
        />
      </div>

      {/* Glassmorphism floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-28 h-28 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl"
        style={{ y: y1 }}
        animate={{ 
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <Atom className="text-white/70 w-8 h-8" />
        </div>
      </motion.div>

      {/* Bandera mexicana flotante */}
      <motion.div
        className="absolute top-20 right-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 shadow-2xl"
        style={{ y: y2 }}
        animate={{ 
          rotate: [0, -5, 5, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <MexicanFlag />
          <motion.div
            className="text-white/70 text-xs font-medium text-center"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🇲🇽 México
          </motion.div>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 inline-block shadow-2xl"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(59, 130, 246, 0.2)"
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Mi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">Historia</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <Rocket className="text-blue-400 w-8 h-8 mx-auto" />
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 30px 60px rgba(59, 130, 246, 0.2)"
            }}
          >
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl font-bold text-white">
                Desarrollador Mexicano con Visión Global
              </h3>
              <MexicanFlag />
            </div>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Como Abraham Rivera, soy un desarrollador mexicano orgulloso de mis raíces, 
              con más de 5 años perfeccionando el arte del desarrollo de software. 
              Mi experiencia multicultural me permite crear soluciones que trascienden 
              fronteras, combinando la calidez mexicana con estándares internacionales.
            </p>
            
            <div className="backdrop-blur-sm bg-gradient-to-r from-green-500/10 via-white/10 to-red-500/10 border border-white/20 rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <Globe className="text-blue-400 w-6 h-6" />
                <h4 className="text-xl font-semibold text-white">Comunicación Global</h4>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl mb-1">🇲🇽</div>
                  <div className="text-white font-medium">Español</div>
                  <div className="text-green-400 text-sm">Nativo</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">🇺🇸</div>
                  <div className="text-white font-medium">English</div>
                  <div className="text-blue-400 text-sm">Avanzado</div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Especializado en Angular, .NET, y arquitecturas cloud-native, combino 
              la robustez de SQL Server y PostgreSQL con la agilidad de Docker. 
              Mi enfoque bilingüe me permite colaborar efectivamente con equipos 
              internacionales y crear documentación técnica precisa.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {[
                'Arquitectura Escalable', 
                'Principios SOLID', 
                'Microservicios', 
                'CI/CD', 
                'Cloud Computing',
                'DevOps',
                'Comunicación Bilingüe',
                'Colaboración Global'
              ].map((skill) => (
                <motion.span 
                  key={skill}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="px-3 py-1 backdrop-blur-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: '0 25px 50px rgba(59, 130, 246, 0.3)'
                }}
                className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-2xl text-center shadow-2xl"
              >
                <motion.div
                  animate={{ rotate: [0, 8, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, delay: index * 1.2 }}
                >
                  <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                </motion.div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-blue-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Special scroll-triggered card in corner */}
      <motion.div
        className="fixed bottom-10 left-10 w-36 h-36 rounded-3xl backdrop-blur-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/10 border border-white/30 shadow-2xl z-50"
        initial={{ opacity: 0, y: 100, rotate: 15 }}
        animate={{ 
          opacity: scrollYProgress.get() > 0.2 ? 1 : 0,
          y: scrollYProgress.get() > 0.2 ? 0 : 100,
          rotate: scrollYProgress.get() > 0.2 ? 0 : 15
        }}
        style={{
          y: useTransform(scrollYProgress, [0.2, 1], [0, -100])
        }}
        whileHover={{ 
          scale: 1.15, 
          rotate: -5,
          boxShadow: "0 35px 70px rgba(147, 51, 234, 0.4)"
        }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center p-4">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Code className="text-white/80 w-10 h-10 mb-2" />
          </motion.div>
          <span className="text-white/70 text-xs font-medium text-center">Code Art</span>
        </div>
      </motion.div>
    </section>
  );
};

export default About;