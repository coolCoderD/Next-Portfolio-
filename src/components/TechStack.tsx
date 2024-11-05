import { motion } from 'framer-motion';
import { Layout, Server, Database, Globe, Code2, GitBranch, Cloud, ClipboardList, Edit3 } from 'lucide-react';


const technologies = {
    'Frontend': {
      icon: <Layout className="w-6 h-6" />,
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Three.js', 'GSAP']
    },
    'Backend': {
      icon: <Server className="w-6 h-6" />,
      skills: ['Node.js', 'Express', 'Python']
    },
    'Database': {
      icon: <Database className="w-6 h-6" />,
      skills: ['MongoDB', 'SQL', 'Firebase']
    },
    'DevOps': {
      icon: <Globe className="w-6 h-6" />,
      skills: ['Docker', 'AWS']
    },
    'Languages': {
      icon: <Code2 className="w-6 h-6" />,
      skills: ['Java','JavaScript', 'TypeScript', 'Python', 'C/C++']
    },
    'Version Control': {
      icon: <GitBranch className="w-6 h-6" />,
      skills: ['Git', 'GitHub', 'GitLab']
    },
    'Cloud & Hosting': {
      icon: <Cloud className="w-6 h-6" />,
      skills: ['Vercel', 'Netlify','Render']
    },
    // 'Project Management': {
    //   icon: <ClipboardList className="w-6 h-6" />,
    //   skills: ['Jira', 'Trello', 'Confluence']
    // },
    // 'UI/UX Design': {
    //   icon: <Edit3 className="w-6 h-6" />,
    //   skills: ['Figma', 'Adobe XD', 'Sketch']
    // }
  };

export function TechStack() {
  return (
    <section id="tech-stack" className="relative min-h-screen py-20 px-4">

      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white dark:text-white mb-12 text-center ">My  <span className='bg-gradient-to-r from-[#8888ff] to-[#ff88ff] bg-clip-text text-transparent'>Tech Stack</span> </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(technologies).map(([category, { icon, skills }]) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 dark:bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-white dark:text-white">{icon}</div>
                  <h3 className="text-xl font-semibold text-white dark:text-white">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/10 dark:bg-white/10 rounded-full text-sm text-white dark:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}