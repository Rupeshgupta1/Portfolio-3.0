import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const PageLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary"
        >
          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <h1 className="text-5xl font-bold text-white">
              Rupesh <span className="text-[#915EFF]">Gupta</span>
            </h1>
            <p className="text-secondary text-lg mt-2">MERN Stack Developer</p>
          </motion.div>

          {/* Animated spinner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-24 h-24 mb-8"
          >
            <div className="absolute inset-0 rounded-full border-4 border-[#915EFF]/20" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#915EFF]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[#915EFF] font-bold text-xl">RG</span>
            </div>
          </motion.div>

          {/* Progress bar */}
          <div className="w-64 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#915EFF] rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
          <p className="text-white/50 text-sm mt-3">{progress}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
