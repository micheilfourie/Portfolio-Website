import Typewriter from "typewriter-effect";

const list = [
  "I Build Responsive Websites.",
  "I Design Web Applications.",
  "I Produce Digital Art.",
];

const TypewriterEffect = () => {
  return (
    <div className="font-poppins z-10 flex items-center gap-2 text-lg text-white max-sm:flex-col max-sm:items-start">
      <span className="text-accent">{`<code>`}</span>
      <span className="max-sm:pl-8">
        <Typewriter
          options={{
            strings: list,
            autoStart: true,
            loop: true,
            deleteSpeed: 25,
            delay: 100,
            pauseFor: 2000,
          }}
        />
      </span>

      <span className="text-accent">{`</code>`}</span>
    </div>
  );
};

export default TypewriterEffect;
