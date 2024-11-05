import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demo: string;
  code: string;
}

export function ProjectCard({ title, description, image, tags, demo, code }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden"
    >
      <div className="relative h-48">
        <img
          src={image}
          alt="project"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-white/10 rounded-full text-sm text-white"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a
            href={demo}
            className="text-white hover:text-gray-300 transition-colors flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Demo</span>
          </a>
          <a
            href={code}
            className="text-white hover:text-gray-300 transition-colors flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            <span>Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}