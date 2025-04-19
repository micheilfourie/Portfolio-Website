import {
  DataVisCert,
  FrontEndCert,
  GraphicDesignCert,
  JavaScriptCert,
  RelationalDBCert,
  WebDesignCert,
  ThreeDCert,
  PythonThreeCert,
  PythonAdvancedCert,
  PythonCert,
} from "./assets/Certificates/index.js";

import globeSVG from "./assets/globe-negative.svg";
import penSVG from "./assets/pen-negative.svg";
import cameraSVG from "./assets/camera-negative.svg";
import TravelThumbnail from "./assets/travel-website-thumbnail.webp";
import FurnatureThumbnail from "./assets/furnature-e-commerce-thumbnail.webp";

const typeWriterList = [
  "I Build Responsive Websites.",
  "I Edit and Retouch Photos.",
  "I Create Vector Graphics.",
];

const projectList = [
  {
    title: "E-Commerce Website",
    thumbnail: FurnatureThumbnail,
    link: "https://micheilfourie.github.io/Furniture-Shop-Website/",
    gitLink: "https://github.com/micheilfourie/Furniture-Shop-Website",
  },
  {
    title: "Travel Website",
    thumbnail: TravelThumbnail,
    link: "https://micheilfourie.github.io/Travel-Website/",
    gitLink: "https://github.com/micheilfourie/Travel-Website",
  },
];

const servicesList = [
  {
    title: "Static Website",
    description:
      "Responsive and modern websites built with React and Tailwind — perfect for portfolios, landing pages, or business sites.",
    image: globeSVG,
  },
  {
    title: "Photo Editing",
    description:
      "Professional photo editing including blemish removal, color correction, background cleanup, and overall enhancement for print or web use.",
    image: cameraSVG,
  },
  {
    title: "Vector Creation",
    description:
      "Transform raster images or sketches into crisp, scalable vector graphics ideal for logos, print materials, and digital designs.",
    image: penSVG,
  },
];

const timelineList = [
  {
    heading: "Relational Database",
    description:
      "I Acquired expertise in relational database design, SQL queries, and data management, enhancing my backend development skills.",
    link: "https://www.freecodecamp.org/certification/Micheil_Fourie/relational-database-v8",
    certificate: RelationalDBCert,
  },
  {
    heading: "Data Visualization",
    description:
      "I Learned how to transform raw data into meaningful visuals using D3.js and other tools to create insightful, interactive charts and graphs.",
    link: "https://www.freecodecamp.org/certification/Micheil_Fourie/data-visualization",
    certificate: DataVisCert,
  },
  {
    heading: "Front End Development Libraries",
    description:
      "I Gained hands-on experience with React, Redux, Bootstrap, and other essential libraries for building interactive and dynamic web applications.",
    link: "https://www.freecodecamp.org/certification/Micheil_Fourie/front-end-development-libraries",
    certificate: FrontEndCert,
  },
  {
    heading: "JavaScript Algorithms and Data Structures",
    description:
      "I Developed a strong foundation in JavaScript, learning algorithms, data structures, and problem-solving techniques to write efficient code.",
    link: "https://www.freecodecamp.org/certification/Micheil_Fourie/javascript-algorithms-and-data-structures-v8",
    certificate: JavaScriptCert,
  },
  {
    heading: "Responsive Web Design",
    description:
      "I Mastered HTML, CSS, and modern layout techniques to build fully responsive and accessible websites.",
    link: "https://www.freecodecamp.org/certification/Micheil_Fourie/responsive-web-design",
    certificate: WebDesignCert,
  },
  {
    heading: "Python Advanced",
    description:
      "I tackled more complex Python topics, such as decorators, generators, and advanced data handling, strengthening my backend proficiency.",
    link: "",
    certificate: PythonAdvancedCert,
  },
  {
    heading: "Python 3",
    description:
      "I expanded on core Python knowledge with deeper insights into language features, object-oriented programming, and modern development practices.",
    link: "",
    certificate: PythonThreeCert,
  },
  {
    heading: "Python",
    description:
      "I built a solid understanding of Python fundamentals, syntax, and its applications in backend development and scripting.",
    link: "",
    certificate: PythonCert,
  },
  {
    heading: "3D Design",
    description:
      "I explored 3D modeling and design, gaining hands-on experience with tools and techniques to bring digital concepts to life.",
    link: "",
    certificate: ThreeDCert,
  },
  {
    heading: "Graphic Design",
    description:
      "I honed my skills in Photoshop, Illustrator, and InDesign, to create impactful visuals for clients.",
    link: "",
    certificate: GraphicDesignCert,
  },
  {
    heading: "Java - Oracle Bursary",
    description:
      "I gained a solid foundation in Java and object-oriented programming through an Oracle-sponsored course but was unable to attend the final exam due to personal reasons.",
    link: "",
    certificate: "",
  },
];

export { timelineList, servicesList, projectList, typeWriterList };
