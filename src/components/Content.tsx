import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, Send } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { Navigation } from './Navigation';

const projects = [
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time data visualization platform with machine learning insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TensorFlow.js", "D3.js"],
    demo: "#",
    code: "#"
  },
  {
    title: "Web3 DeFi Platform",
    description: "Decentralized finance application with smart contract integration",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    tags: ["Solidity", "Next.js", "Web3.js"],
    demo: "#",
    code: "#"
  },
  {
    title: "3D Product Configurator",
    description: "Interactive 3D product visualization tool for e-commerce",
    image: "https://images.unsplash.com/photo-1633899306328-c5e70574aaa5?auto=format&fit=crop&w=800&q=80",
    tags: ["Three.js", "React", "WebGL"],
    demo: "#",
    code: "#"
  }
];

export function Content() {
  return (
    <div className="absolute inset-0 overflow-auto">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto w-full"
        >
<h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-[#8888ff] to-[#ff88ff] bg-clip-text text-transparent">
  Diksha Sharma
</h1>
          <h2 className="text-2xl text-gray-300 mb-12">
            Full Stack Developer & DSA Enthusiast
          </h2>
          
          <div className="space-y-6">
            <p className="text-gray-300 max-w-2xl w-[80%]">
            Crafting immersive web experiences through creativity and technical skill. Proficient in MERN stack and DSA with Java, I bring efficiency and depth to every digital solution.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center space-x-2"
              >
                <span>View Projects</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors"
              >
                Contact Me
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-12">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8"
          >
            <h2 className="text-4xl font-bold text-white mb-8">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-white"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-3 rounded-full font-medium"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}