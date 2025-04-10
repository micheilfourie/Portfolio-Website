import Typewriter from "typewriter-effect";
import { typeWriterList } from "../data.js";

const TypewriterEffect = () => {
  return (
    <div className="font-poppins text-md z-10 flex items-start text-white max-md:hidden max-sm:flex-col max-sm:gap-1">
      <span className="text-accent">{`<span>`}</span>
      <span className="px-2 max-sm:pl-4">
        <Typewriter
          options={{
            strings: typeWriterList,
            autoStart: true,
            loop: true,
            deleteSpeed: 25,
            delay: 80,
            pauseFor: 2000,
          }}
        />
      </span>

      <span className="text-accent">{`</span>`}</span>
    </div>
  );
};

export default TypewriterEffect;
