import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu, Database, Zap } from 'lucide-react';
import { useRef } from 'react';

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const cardOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.8, 1], [0, 1, 1, 0]);
  const cardX = useTransform(scrollYProgress, [0.3, 0.5, 0.8, 1], [-100, 0, 0, -100]);
  const cardRotate = useTransform(scrollYProgress, [0.3, 0.5, 0.8, 1], [-20, 0, 0, -20]);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Cpu,
      skills: [
        { name: 'Angular', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'RxJS', level: 85 },
        { name: 'Angular Material', level: 88 }
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      skills: [
        { name: '.NET Core', level: 92 },
        { name: 'C#', level: 90 },
        { name: 'Web API', level: 88 },
        { name: 'Entity Framework', level: 85 }
      ]
    },
    {
      title: 'Data & Infrastructure',
      icon: Zap,
      skills: [
        { name: 'SQL Server', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'Docker', level: 80 },
        { name: 'Ionos/Plesk', level: 75 }
      ]
    }
  ];

  return (
    <section 
      ref={containerRef}
      id="skills" 
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 25% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 75% 70%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, rgba(79, 70, 229, 0.08) 0%, transparent 50%)
            `
          }}
        />

        <motion.div 
          className="absolute inset-0"
          style={{ y: y1 }}
        >
          {[...Array(45)].map((_, i) => (
            <motion.div
              key={`skills-distant-${i}`}
              className="absolute w-0.5 h-0.5 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.8 + 0.2
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.5, 1.2, 0.5]
              }}
              transition={{
                duration: Math.random() * 4 + 2,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
            />
          ))}
        </motion.div>

        <motion.div 
          className="absolute inset-0"
          style={{ y: y2 }}
        >
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={`skills-medium-${i}`}
              className="absolute w-1 h-1 bg-blue-200 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.8 + 0.2
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.8, 1.4, 0.8]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </motion.div>

        <motion.div 
          className="absolute inset-0"
          style={{ y: y3 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`skills-close-${i}`}
              className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -150, 0],
                x: [0, Math.sin(i) * 75, 0],
                opacity: [0, 0.8, 0],
                scale: [0.4, 1.6, 0.4]
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Infinity,
                delay: Math.random() * 8,
              }}
            />
          ))}
        </motion.div>

        <motion.div
          style={{ 
            y: y2,
            background: `conic-gradient(from 0deg at 40% 60%, transparent, rgba(59, 130, 246, 0.4), transparent, rgba(147, 51, 234, 0.3), transparent)`
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-10"
        />
      </div>

      <motion.div
        className="absolute top-16 right-16 w-32 h-32 rounded-3xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl"
        style={{ y: y1 }}
        animate={{ 
          rotate: [0, -12, 12, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <Cpu className="text-white/70 w-10 h-10" />
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
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 inline-block shadow-2xl"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 30px 60px rgba(59, 130, 246, 0.3)"
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Mi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">Stack Tecnológico</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Tecnologías que domino para crear soluciones modernas e innovadoras
            </p>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 30px 60px rgba(59, 130, 246, 0.3)'
              }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl relative overflow-hidden group"
            >
              <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-4 mb-6 border border-white/10">
                <div className="flex items-center justify-center mb-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 8, repeat: Infinity, delay: categoryIndex }}
                    className="backdrop-blur-lg bg-white/10 rounded-full p-3 border border-white/20"
                  >
                    <category.icon className="w-8 h-8 text-blue-400" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-white text-center">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full backdrop-blur-sm bg-white/10 rounded-full h-3 overflow-hidden border border-white/20">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: skillIndex * 0.2 }}
                        className="h-3 rounded-full relative bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"
                      >
                        <motion.div
                          animate={{ 
                            boxShadow: [
                              '0 0 10px rgba(59, 130, 246, 0.5)',
                              '0 0 20px rgba(59, 130, 246, 0.8)',
                              '0 0 10px rgba(59, 130, 246, 0.5)'
                            ]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="absolute inset-0 rounded-full"
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="fixed top-10 left-10 w-44 h-44 rounded-3xl backdrop-blur-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-white/30 shadow-2xl z-50"
        style={{
          opacity: cardOpacity,
          x: cardX,
          rotate: cardRotate,
          y: useTransform(scrollYProgress, [0.4, 1], [0, -150])
        }}
        whileHover={{ 
          scale: 1.12, 
          rotate: 8,
          boxShadow: "0 40px 80px rgba(6, 182, 212, 0.4)"
        }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center p-6">
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 360]
            }}
            transition={{ 
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 15, repeat: Infinity, ease: "linear" }
            }}
          >
            <Database className="text-white/80 w-12 h-12 mb-3" />
          </motion.div>
          <span className="text-white/70 text-sm font-medium text-center">Tech Stack</span>
          <div className="mt-2 flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-cyan-400/60 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.3 
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
