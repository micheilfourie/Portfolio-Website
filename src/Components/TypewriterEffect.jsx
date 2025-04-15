import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { typeWriterList } from "../data.js";

const TypewriterEffect = () => {
  const [text, setText] = useState("");
  const [listIndex, setListIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = typeWriterList[listIndex];
    let typingSpeed = isDeleting ? 30 : 110;
    let interval;

    if (!isDeleting && charIndex < currentText.length) {
      interval = setTimeout(() => {
        setText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      interval = setTimeout(() => {
        setText((prev) => prev.slice(0, prev.length - 1));
        setCharIndex((prev) => prev - 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setListIndex((prev) => (prev + 1) % typeWriterList.length);
    }

    return () => clearTimeout(interval);
  }, [charIndex, isDeleting, listIndex]);

  return (
    <div className="font-poppins text-md z-10 flex items-start text-white max-sm:flex-col max-sm:gap-1">
      <span className="text-accent">{`<code>`}</span>
      <span className="px-2 max-sm:pl-4">
        <motion.span
          className="whitespace-pre"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {text}
          <span className="animate-pulse">|</span>
        </motion.span>
      </span>
      <span className="text-accent">{`</code>`}</span>
    </div>
  );
};

export default TypewriterEffect;
