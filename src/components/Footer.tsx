
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-t border-blue-500/20 py-8 relative overflow-hidden">
      {/* Cosmic background effect */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 left-0 w-full h-full opacity-10"
          style={{
            background: `conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.3), transparent, rgba(147, 51, 234, 0.3), transparent)`
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="text-2xl font-bold text-white mb-4">
            <span className="text-blue-400">&lt;</span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Abraham Rivera
            </span>
            <span className="text-blue-400">/&gt;</span>
          </div>
          
          <p className="text-gray-400 mb-4">
            Desarrollando el futuro con Angular, .NET y tecnologías modernas
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <span>Creado con</span>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
            </motion.div>
            <span>en el mundo de React y Tailwind CSS</span>
          </div>
          
          <div className="mt-6 pt-6 border-t border-slate-700/50">
            <p className="text-gray-500 text-sm">
              © 2025 Abraham Rivera. Todos los derechos reservados.
            </p>
          </div>

          {/* Floating stars */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 2) * 40}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
