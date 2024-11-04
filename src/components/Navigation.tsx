import { motion } from 'framer-motion';
import { Home, Code, Send } from 'lucide-react';

export function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 py-6 px-4"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-white font-bold text-xl">DS</a>
        <div className="flex space-x-8">
          <a href="#home" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </a>
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
            <Code className="w-4 h-4" />
            <span>Projects</span>
          </a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
            <Send className="w-4 h-4" />
            <span>Contact</span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}