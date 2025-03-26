import Typewriter from "typewriter-effect";

const list = [
  "I Build Responsive Websites.",
  "I Design Web Applications.",
  "I Produce Digital Art.",
];

const TypewriterEffect = () => {
  return (
    <div className="font-poppins z-10 flex items-center gap-2 text-lg text-white">
      <span className="text-accent">{`<code>`}</span>
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
      <span className="text-accent">{`</code>`}</span>
    </div>
  );
};

export default TypewriterEffect;
