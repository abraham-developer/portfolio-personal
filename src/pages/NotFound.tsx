import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Home, Rocket, Star, Satellite, Navigation } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // Astronaut floating animation
  const astronautAnimation = {
    y: [0, -30, 0],
    rotate: [0, 5, -5, 0],
    scale: [1, 1.05, 1]
  };

  // Planet component
  const Planet = ({ size, color, position, duration }: {
    size: string;
    color: string;
    position: { x: string; y: string };
    duration: number;
  }) => (
    <motion.div
      className={`absolute ${size} rounded-full opacity-60`}
      style={{
        background: `radial-gradient(circle at 30% 30%, ${color}aa, ${color}33)`,
        left: position.x,
        top: position.y,
      }}
      animate={{
        rotate: 360,
        scale: [1, 1.1, 1],
      }}
      transition={{
        rotate: { duration: duration, repeat: Infinity, ease: "linear" },
        scale: { duration: duration / 2, repeat: Infinity, ease: "easeInOut" }
      }}
    />
  );

  return (
    <div 
      ref={containerRef}
      className="min-h-screen relative overflow-hidden bg-gradient-to-b from-indigo-950 via-purple-950 to-black"
    >
      {/* Starfield Background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>

      {/* Floating Planets */}
      <Planet 
        size="w-20 h-20" 
        color="#ff6b6b" 
        position={{ x: "10%", y: "20%" }} 
        duration={20} 
      />
      <Planet 
        size="w-16 h-16" 
        color="#4ecdc4" 
        position={{ x: "85%", y: "15%" }} 
        duration={25} 
      />
      <Planet 
        size="w-12 h-12" 
        color="#45b7d1" 
        position={{ x: "75%", y: "70%" }} 
        duration={18} 
      />
      <Planet 
        size="w-24 h-24" 
        color="#f9ca24" 
        position={{ x: "5%", y: "75%" }} 
        duration={30} 
      />

      {/* Floating Space Debris */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`debris-${i}`}
          className="absolute w-3 h-3 bg-gradient-to-r from-gray-400 to-gray-600 rounded-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.sin(i) * 100, 0],
            y: [0, Math.cos(i) * 80, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}
        />
      ))}

      {/* Nebula Effect */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(138, 43, 226, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(30, 144, 255, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse at 60% 40%, rgba(255, 20, 147, 0.15) 0%, transparent 50%)
          `
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          
          {/* Astronaut Figure */}
          <motion.div
            className="relative mx-auto mb-12 w-48 h-48"
            animate={astronautAnimation}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Astronaut Body */}
            <div className="relative w-full h-full">
              {/* Helmet */}
              <motion.div 
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full backdrop-blur-xl bg-white/10 border-2 border-white/30 shadow-2xl"
                whileHover={{ scale: 1.1 }}
              >
                {/* Helmet Reflection */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
                {/* Face */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-pink-200/80 to-pink-300/60">
                  {/* Eyes */}
                  <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-black rounded-full" />
                  <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-black rounded-full" />
                  {/* Mouth */}
                  <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-red-400 rounded-full" />
                </div>
              </motion.div>

              {/* Body */}
              <motion.div 
                className="absolute top-16 left-1/2 transform -translate-x-1/2 w-20 h-28 rounded-2xl backdrop-blur-xl bg-white/15 border border-white/20 shadow-2xl"
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {/* Chest Panel */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-6 rounded bg-gradient-to-br from-blue-400/60 to-blue-600/40 border border-blue-300/30">
                  <div className="w-full h-full flex items-center justify-center">
                    <motion.div
                      className="w-2 h-2 bg-green-400 rounded-full"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Arms */}
              <motion.div 
                className="absolute top-20 left-2 w-8 h-16 rounded-xl backdrop-blur-lg bg-white/10 border border-white/20"
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 8, repeat: Infinity, delay: 1 }}
              />
              <motion.div 
                className="absolute top-20 right-2 w-8 h-16 rounded-xl backdrop-blur-lg bg-white/10 border border-white/20"
                animate={{ rotate: [0, -20, 0] }}
                transition={{ duration: 8, repeat: Infinity, delay: 1 }}
              />

              {/* Legs */}
              <motion.div 
                className="absolute bottom-8 left-6 w-6 h-20 rounded-xl backdrop-blur-lg bg-white/10 border border-white/20"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 10, repeat: Infinity, delay: 2 }}
              />
              <motion.div 
                className="absolute bottom-8 right-6 w-6 h-20 rounded-xl backdrop-blur-lg bg-white/10 border border-white/20"
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 10, repeat: Infinity, delay: 2 }}
              />

              {/* Jetpack */}
              <motion.div 
                className="absolute top-20 left-1/2 transform -translate-x-1/2 translate-x-2 w-6 h-12 rounded-lg backdrop-blur-lg bg-gradient-to-b from-gray-400/40 to-gray-600/60 border border-gray-300/30"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {/* Jetpack Fire */}
                <motion.div
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-gradient-to-t from-orange-400 via-red-400 to-yellow-300 rounded-b-full opacity-80"
                  animate={{
                    scaleY: [0.5, 1.2, 0.5],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ duration: 0.3, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl mb-8"
          >
            <motion.h1 
              className="text-8xl md:text-9xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              404
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ¡Houston, tenemos un problema! 🚀
            </motion.h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Parece que te has perdido en el espacio infinito del internet.<br />
              Esta página se ha desviado de su órbita y no puede ser encontrada.
            </p>

            {/* Space Route Info */}
            <motion.div 
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 mb-8"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-center gap-2 text-red-400">
                <Navigation className="w-5 h-5" />
                <span className="font-mono text-sm">Ruta perdida: {location.pathname}</span>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/"
                className="group flex items-center gap-3 px-8 py-4 backdrop-blur-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Home className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Regresar a la Tierra
              </motion.a>

              <motion.button
                onClick={() => window.history.back()}
                className="group flex items-center gap-3 px-8 py-4 backdrop-blur-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket className="w-5 h-5 group-hover:-rotate-45 transition-transform" />
                Retroceso de Emergencia
              </motion.button>
            </div>
          </motion.div>

          {/* Floating Mission Control Panel */}
          <motion.div
            className="fixed bottom-6 right-6 backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl p-4 shadow-2xl"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Satellite className="w-6 h-6 text-cyan-400" />
              </motion.div>
              <div className="text-left">
                <div className="text-white text-sm font-semibold">Control de Misión</div>
                <div className="text-cyan-400 text-xs">Estado: Perdido en el espacio</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Shooting Stars */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`shooting-star-${i}`}
          className="absolute w-1 h-20 bg-gradient-to-b from-white to-transparent opacity-70"
          initial={{
            x: -100,
            y: Math.random() * window.innerHeight,
            rotate: 45
          }}
          animate={{
            x: window.innerWidth + 100,
            y: Math.random() * window.innerHeight + 200,
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 10 + 5,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
};

export default NotFound;