
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Sistema de Gestión Empresarial',
      description: 'Aplicación web completa para gestión de inventarios, ventas y reportes con ASP.NET Core y SQL Server.',
      technologies: ['ASP.NET Core', 'SQL Server', 'Entity Framework', 'Bootstrap'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'API de E-commerce',
      description: 'RESTful API robusta para plataforma de comercio electrónico con autenticación JWT y pagos integrados.',
      technologies: ['C#', 'Web API', 'JWT', 'Swagger', 'Azure'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Dashboard Analítico',
      description: 'Panel de control interactivo con reportes en tiempo real y visualización de datos empresariales.',
      technologies: ['ASP.NET MVC', 'Chart.js', 'SQL Server', 'SignalR'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Sistema de Recursos Humanos',
      description: 'Plataforma integral para gestión de empleados, nómina y evaluaciones de desempeño.',
      technologies: ['Blazor', 'Entity Framework', 'SQL Server', 'Identity'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Microservicios para Logística',
      description: 'Arquitectura de microservicios para sistema de seguimiento y gestión logística empresarial.',
      technologies: ['Docker', 'Kubernetes', 'RabbitMQ', 'Redis'],
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=600&h=400&fit=crop',
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'App de Gestión Financiera',
      description: 'Aplicación web para control de finanzas personales y empresariales con reportes avanzados.',
      technologies: ['Razor Pages', 'Entity Framework', 'Chart.js', 'Bootstrap'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      liveUrl: '#',
      codeUrl: '#'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mi <span className="text-blue-400">Portafolio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Algunos de los proyectos más destacados que he desarrollado usando tecnologías .NET
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-slate-700/50 rounded-xl overflow-hidden border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relax">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.codeUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    <Code size={16} />
                    <span className="text-sm">Código</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
