import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, Send } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { Navigation } from './Navigation';
import { TechStack } from './TechStack';

const projects = [
  {
    title: "3D-Shirt-Store",
    description: "Design your one-of-a-kind shirt with our advanced 3D customization tool, allowing you to personalize every detail for a unique and exclusive look tailored just for you.",
    image: "https://res.cloudinary.com/drts3ztiy/image/upload/v1730829245/ljvapm2pwff708cg7cqz.png",
    tags: ["React.js", "Three.js", "Tailwind CSS","Node.js","Express.js"],
    demo: "https://shirt3d98.netlify.app/",
    code: "https://github.com/coolCoderD/Shirt_3D_Store"
  },
  {
    title: "Ochi Design",
    description: "Experience award-winning website design that combines captivating visuals, seamless navigation, and innovative features.",
    image: "https://res.cloudinary.com/drts3ztiy/image/upload/v1730829243/vseru2z5pocqjr52hp0g.png",
    tags: ["React.js", "Tailwind CSS", "Framer Motion","GSAP"],
    demo: "https://ochi98.netlify.app/",
    code: "https://github.com/coolCoderD/Ochi"
  },
  {
    title: "BiTEZ",
    description: "BiTEZ is a comprehensive MERN-based food ordering platform with a user-friendly interface, allowing customers to browse, like, and order food with secure payments, and includes an Admin Panel for menu management.",
    image: "https://res.cloudinary.com/drts3ztiy/image/upload/v1730829249/vririigfsmv4kpjdj1ry.png",
    tags: ["MERN", "Stripe", "Tailwind CSS","Cloudinary","Axios"],
    demo: "https://bi-tez.vercel.app/",
    code: "https://github.com/coolCoderD/BiTEZ"
  },

];

export function Content() {
  return (
    <div className="absolute inset-0 overflow-auto px-9">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen mt-10 text-center flex items-center justify-center relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto w-full"
        >
<h1 className="text-8xl  font-black mb-6 bg-gradient-to-r from-[#8888ff] to-[#ff88ff] bg-clip-text text-transparent">
  Diksha Sharma
</h1>
          <h2 className="text-3xl text-gray-300 mb-12">
            Full Stack Developer & DSA Enthusiast
          </h2>
          
          <div className="space-y-6 ">
            <p className="text-gray-300 px-20 text-center text-xl ">
            Crafting immersive web experiences through creativity and technical skill. Proficient in MERN stack and DSA with Java, I bring efficiency and depth to every digital solution.
            </p>
            
            <div className="flex space-x-6 items-center justify-center">
              <a href="https://github.com/coolCoderD" className="text-gray-300 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/diksha-sharma-1781b8253/" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:dikshasharmahm@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>

            <div className="flex flex-wrap gap-4 mt-8 justify-center">
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
            {/* Tech Stack Section */}
            <TechStack />

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-12 text-center">A small selection of <span className='bg-gradient-to-r from-[#8888ff] to-[#ff88ff] bg-clip-text text-transparent'>recent projects</span></h2>
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
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Ready to take <span className="bg-gradient-to-r from-[#8888ff] to-[#ff88ff] bg-clip-text text-transparent">your</span>  digital presence to the next level?</h2>
            {/* <form className="space-y-6">
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
            </form> */}
            <h3 className="text-gray-300">Reach out to me today, and let's discuss how I can help you achieve your goals.</h3>
          </motion.div>
        </div>
      </section>
    </div>
  );
}