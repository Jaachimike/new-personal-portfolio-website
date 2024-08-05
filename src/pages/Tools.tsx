import {motion} from "framer-motion";
import Softwares from "../components/Softwares";
import mocha from "../assets/svg/tools/mocha.svg";
import googleWorkspace from "../assets/svg/tools/google-workspace.svg";
import postman from "../assets/svg/tools/postman.svg";
import git from "../assets/svg/tools/git.svg";

import javascript from "../assets/svg/tools/javascript.svg";
import html from "../assets/svg/tools/html.svg";
import typescript from "../assets/svg/tools/typescript.svg";
import css from "../assets/svg/tools/css.svg";
import react from "../assets/svg/tools/react.svg";
import next from "../assets/svg/tools/nextjs.svg";
import node from "../assets/svg/tools/node-js.svg";
import express from "../assets/svg/tools/express-js.svg";
import framer from "../assets/svg/tools/framer.svg";
import postgresql from "../assets/svg/tools/postgresql.svg";
import mongodb from "../assets/svg/tools/mongodb.svg";
import mysql from "../assets/svg/tools/mysql.svg";
import tailwind from "../assets/svg/tools/tailwind.svg";
import github from "../assets/svg/tools/github.svg";
import jest from "../assets/svg/tools/jest.svg";
import vscode from "../assets/svg/tools/vs-code.svg";

const tools = [
  // Programming Languages / Frameworks
  {
    categoryTitle: "Programming Languages / Frameworks",
    softwareDetails: [
      {
        toolName: "Javascript",
        toolLogoSrc: javascript,
        toolDescription:
          "A versatile, high-level programming language that's essential for modern web development. It enables dynamic content and interactivity on websites, and can be used for both front-end and back-end development.",
      },
      {
        toolName: "HTML5",
        toolLogoSrc: html,
        toolDescription:
          "The latest version of Hypertext Markup Language, providing the structure and content for web pages. It introduces new semantic elements and multimedia support, enhancing web accessibility and user experience.",
      },
      {
        toolName: "CSS3",
        toolLogoSrc: css,
        toolDescription:
          "The third major iteration of Cascading Style Sheets, offering advanced styling capabilities for web design. It includes features like animations, gradients, and flexible layouts, allowing for more sophisticated and responsive web interfaces.",
      },
      {
        toolName: "React JS",
        toolLogoSrc: react,
        toolDescription:
          "A popular JavaScript library for building user interfaces, developed by Facebook. It utilizes a component-based architecture and virtual DOM for efficient rendering, making it ideal for creating dynamic and interactive web applications.",
      },
      {
        toolName: "Typescript",
        toolLogoSrc: typescript,
        toolDescription:
          "A strongly-typed superset of JavaScript that compiles to plain JavaScript. It adds optional static typing, classes, and modules to the language, enhancing code quality and maintainability in large-scale applications.",
      },
      {
        toolName: "Next JS",
        toolLogoSrc: next,
        toolDescription:
          "A React-based framework for building server-side rendered and statically generated web applications. It offers features like automatic code splitting, routing, and API routes, streamlining the development of scalable web applications.",
      },
      {
        toolName: "Node JS",
        toolLogoSrc: node,
        toolDescription:
          "A JavaScript runtime built on Chrome's V8 JavaScript engine, allowing developers to run JavaScript on the server-side. It's known for its event-driven, non-blocking I/O model, making it efficient for building scalable network applications.",
      },
      {
        toolName: "Express JS",
        toolLogoSrc: express,
        toolDescription:
          "A minimal and flexible Node.js web application framework that provides a robust set of features for building single-page, multi-page, and hybrid web applications. It's widely used for creating RESTful APIs and web servers.",
      },
      {
        toolName: "Tailwind CSS",
        toolLogoSrc: tailwind,
        toolDescription:
          "A utility-first CSS framework that provides low-level utility classes to build custom designs quickly. It offers a highly customizable and responsive approach to styling, allowing developers to create unique designs without leaving their HTML.",
      },
      {
        toolName: "Framer",
        toolLogoSrc: framer,
        toolDescription:
          "A design and prototyping tool that allows designers to create interactive and animated user interfaces. It supports code-based design with React components, bridging the gap between design and development.",
      },
    ],
  },

  // DBMS
  {
    categoryTitle: "DBMS",
    softwareDetails: [
      {
        toolName: "PostgresQL",
        toolLogoSrc: postgresql,
        toolDescription:
          "A powerful, open-source object-relational database system known for its reliability, feature robustness, and performance. It's highly extensible and compliant with SQL standards, making it suitable for complex queries and large-scale applications.",
      },
      {
        toolName: "MySQL",
        toolLogoSrc: mysql,
        toolDescription:
          "A popular open-source relational database management system, known for its speed, ease of use, and reliability. It's widely used in web applications and is a core component of the LAMP (Linux, Apache, MySQL, PHP/Python/Perl) stack.",
      },
      {
        toolName: "MongoDB",
        toolLogoSrc: mongodb,
        toolDescription:
          "A flexible, document-oriented NoSQL database designed for scalability and developer agility. It stores data in JSON-like documents with dynamic schemas, allowing for easier data integration in certain types of applications.",
      },
    ],
  },
  // Development tools
  {
    categoryTitle: "Development tools",
    softwareDetails: [
      {
        toolName: "Visual Studio Code",
        toolLogoSrc: vscode,
        toolDescription:
          "A lightweight yet powerful source code editor developed by Microsoft. It supports a wide range of programming languages and offers features like IntelliSense, debugging, and Git integration. Its extensibility through a rich ecosystem of plugins makes it highly customizable for various development workflows.",
      },
      {
        toolName: "Google Workspace",
        toolLogoSrc: googleWorkspace,
        toolDescription:
          "A suite of cloud-based productivity and collaboration tools, formerly known as G Suite. It includes applications like Gmail, Google Docs, Sheets, Slides, and Meet. Google Workspace facilitates real-time collaboration, file sharing, and communication, making it popular for both business and educational environments.",
      },
      {
        toolName: "Postman",
        toolLogoSrc: postman,
        toolDescription:
          "A popular API development and testing tool used by developers to design, mock, debug, and test APIs. It provides a user-friendly interface for sending HTTP requests, organizing API endpoints, and automating API tests. Postman also offers features for API documentation and team collaboration, making it an essential tool in API-driven development.",
      },
      {
        toolName: "Git",
        toolLogoSrc: git,
        toolDescription:
          "A distributed version control system designed to handle everything from small to very large projects with speed and efficiency. It allows multiple developers to work on the same codebase, tracking changes, managing branches, and facilitating collaborative software development.",
      },
    ],
  },
  // testing tools
  {
    categoryTitle: "Testing Tools",
    softwareDetails: [
      {
        toolName: "Jest",
        toolLogoSrc: jest,
        toolDescription:
          "A popular JavaScript testing framework developed by Facebook. It's designed to ensure correctness of any JavaScript codebase, with a focus on simplicity and support for large web applications. Jest offers features like snapshot testing, code coverage reports, and mocking capabilities, making it particularly well-suited for React applications.",
      },
      {
        toolName: "Mocha",
        toolLogoSrc: mocha,
        toolDescription:
          "A feature-rich JavaScript test framework running on Node.js and in the browser. It makes asynchronous testing simple and fun, providing a flexible and accurate reporting interface. Mocha allows for the use of any assertion library and supports various testing styles, making it adaptable to different project needs and developer preferences.",
      },
    ],
  },
  // Productivity
  {
    categoryTitle: "Productivity",
    softwareDetails: [
      {
        toolName: "GitHub",
        toolLogoSrc: github,
        toolDescription:
          "A web-based platform for version control and collaboration using Git. It provides hosting for software development and offers features like bug tracking, task management, and wikis. GitHub facilitates open source projects and team collaborations, allowing developers to review code, manage projects, and build software alongside millions of other developers.",
      },
    ],
  },
];

const Tools = () => {
  return (
    <div>
      <div className="py-24">
        {/* writeup */}
        <div className="w-9/12 mb-10">
          <motion.h1
            initial={{x: -40, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 0.3}}
            className="text-white text-3xl font-bold mb-6"
          >
            Software I prefer, how I write and other things I recommend.
          </motion.h1>
          <motion.p
            initial={{x: -40, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 0.4}}
          >
            I get queries on what programming languages I use and productivity
            tools for work management.
          </motion.p>
        </div>
        {/* softwares i use */}
        <div className="w-10/12">
          <Softwares tools={tools} />
        </div>
      </div>
    </div>
  );
};

export default Tools;
