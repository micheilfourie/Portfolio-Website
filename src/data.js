import {
  DataVisCert,
  FrontEndCert,
  GraphicDesignCert,
  JavaScriptCert,
  RelationalDBCert,
  WebDesignCert,
} from "./assets/Certificates/index.js";

import globeSVG from "./assets/Globe_Negative.svg";
import penSVG from "./assets/Pen_Negative.svg";
import cameraSVG from "./assets/Camera_Negative.svg";
import TravelThumbnail from "./assets/Travel Website Thumbnail.webp";
import FurnatureThumbnail from "./assets/Furnature E-Commerce Thumbnail.webp";

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
    heading: "Graphic Design",
    description:
      "I honed my skills in Photoshop, Illustrator, and InDesign, to create impactful visuals for clients.",
    link: "",
    certificate: GraphicDesignCert,
  },
];

export { timelineList, servicesList, projectList, typeWriterList };
