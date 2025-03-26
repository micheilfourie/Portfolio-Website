const bannerItems = [
  {
    highlight: "10y+",
    description: "Coding Experience",
  },
  {
    highlight: "4y+",
    description: "Design Experience",
  },
  {
    highlight: "180+",
    description: "Completed Projects",
  },
];

const Banner = () => {
  return (
    <section className="flex w-full items-center justify-evenly gap-10">
      {bannerItems.map((item, index) => (
        <h6 key={index} className="flex items-center gap-2 text-sm text-white">
          <span className="text-accent text-xl font-[800] tracking-wider">
            {item.highlight}
          </span>{" "}
          {item.description}
        </h6>
      ))}
    </section>
  );
};

export default Banner;
