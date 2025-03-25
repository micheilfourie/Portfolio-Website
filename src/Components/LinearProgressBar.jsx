import { motion, animate } from "framer-motion";
import { useState, useEffect } from "react";

const LinearProgressBar = ({ progress = 50, title = "" }) => {
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    const controls = animate(0, progress, {
      duration: 1.5,
      ease: "easeInOut",
      onUpdate: (value) => setDisplayProgress(Math.round(value)),
    });

    return () => controls.stop();
  }, [progress]);

  return (
    <div>
      <label className="mb-2 flex items-center justify-between">
        <p className="text-sm text-white">{title}</p>
        <motion.span className="font-poppins text-xs text-gray-500">
          {displayProgress}%
        </motion.span>
      </label>

      <div className="bg-navy-900 h-1 w-full">
        <motion.div
          className="bg-accent h-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default LinearProgressBar;
