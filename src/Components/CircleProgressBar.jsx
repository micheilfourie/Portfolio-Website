import { motion, animate } from "framer-motion";
import { useState, useEffect } from "react";

const CircleProgressBar = ({
  progress = 50,
  radius = 50,
  strokeWidth = 6,
  title = "",
  delay = 0,
}) => {
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    const controls = animate(0, progress, {
      duration: 1.5,
      ease: "easeInOut",
      onUpdate: (value) => setDisplayProgress(Math.round(value)),
      delay,
    });

    return () => controls.stop();
  }, [progress, delay]);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative size-14">
        <svg
          className="absolute top-0 left-0"
          width="100%"
          height="100%"
          viewBox="0 0 120 120"
          style={{ transform: "rotate(-90deg)" }}
        >
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="#14141d"
            strokeWidth={strokeWidth}
            fill="none"
          />

          <motion.circle
            cx="60"
            cy="60"
            r={radius}
            stroke="#FFC107"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: "easeInOut", delay }}
          />
        </svg>

        <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
          <motion.span className="font-poppins text-xs text-gray-500">
            {displayProgress}%
          </motion.span>
        </div>
      </div>

      <p className="text-white">{title}</p>
    </div>
  );
};

export default CircleProgressBar;
