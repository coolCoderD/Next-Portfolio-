import { motion } from 'framer-motion';

export function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="relative"
      >
        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-white text-center font-medium"
        >
          Loading Experience...
        </motion.div>
      </motion.div>
    </div>
  );
}