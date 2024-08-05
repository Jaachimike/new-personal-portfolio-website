import Softwares from "../components/Softwares";
import jetbrains from "../assets/svg/tools/jetbrains.svg";
import googleWorkspace from "../assets/svg/tools/google-workspace.svg";
import postman from "../assets/svg/tools/postman.svg";
import git from "../assets/svg/tools/git.svg";

import javascript from "../assets/svg/tools/javascript.svg";
import html from "../assets/svg/tools/html.svg";
import css from "../assets/svg/tools/css.svg";
import react from "../assets/svg/tools/react.svg";
import next from "../assets/svg/tools/nextjs.svg";
import node from "../assets/svg/tools/node-js.svg";
import express from "../assets/svg/tools/express-js.svg";

const tools = [
  {
    categoryTitle: "Programming Languages / Frameworks",
    softwareDetails: [
      {
        toolName: "Javascript",
        toolLogoSrc: javascript,
        toolDescription:
          "Javascript (JS) is a light weight interpreted language with first class functions. Similar to Python, it can be used in browser environments and server side programming. It's a prototype based, multiparadigm, single-threaded, dynamic language supporting object-oriented, imperative and declarative programming. It also has a big community with libraries for supporting different functionalities. For frontend development there are libraries and frameworks that make interactions and development a bit quicker. These include React JS, Vue JS, Svelte, Angular. They make DOM interactions and data manipulation a bit easier with state management. Other libraries include D3 JS for visualization, Lodash and Ramda for functional programming. For server side scripting Node JS is used as the main run time.",
      },
      {
        toolName: "HTML5",
        toolLogoSrc: html,
        toolDescription:
          "Jebrains is a cutting edge software that has specialized in building intelligent development tools. My favorite tool to use is Webstorm for Javascript based development. Other tools I've worked with include PyCharm for Python, IntelliJ for Java and Datagrip for data management. I've also been testing out Jetbrains Space as a complete software development platform with support for Version Control and Project management.",
      },
      {
        toolName: "CSS3",
        toolLogoSrc: css,
        toolDescription:
          "Jebrains is a cutting edge software that has specialized in building intelligent development tools. My favorite tool to use is Webstorm for Javascript based development. Other tools I've worked with include PyCharm for Python, IntelliJ for Java and Datagrip for data management. I've also been testing out Jetbrains Space as a complete software development platform with support for Version Control and Project management.",
      },
      {
        toolName: "React JS",
        toolLogoSrc: react,
        toolDescription:
          "Javascript (JS) is a light weight interpreted language with first class functions. Similar to Python, it can be used in browser environments and server side programming. It's a prototype based, multiparadigm, single-threaded, dynamic language supporting object-oriented, imperative and declarative programming. It also has a big community with libraries for supporting different functionalities. For frontend development there are libraries and frameworks that make interactions and development a bit quicker. These include React JS, Vue JS, Svelte, Angular. They make DOM interactions and data manipulation a bit easier with state management. Other libraries include D3 JS for visualization, Lodash and Ramda for functional programming. For server side scripting Node JS is used as the main run time.",
      },
      {
        toolName: "Next JS",
        toolLogoSrc: next,
        toolDescription:
          "Jebrains is a cutting edge software that has specialized in building intelligent development tools. My favorite tool to use is Webstorm for Javascript based development. Other tools I've worked with include PyCharm for Python, IntelliJ for Java and Datagrip for data management. I've also been testing out Jetbrains Space as a complete software development platform with support for Version Control and Project management.",
      },
      {
        toolName: "Node JS",
        toolLogoSrc: node,
        toolDescription:
          "Jebrains is a cutting edge software that has specialized in building intelligent development tools. My favorite tool to use is Webstorm for Javascript based development. Other tools I've worked with include PyCharm for Python, IntelliJ for Java and Datagrip for data management. I've also been testing out Jetbrains Space as a complete software development platform with support for Version Control and Project management.",
      },
    ],
  },

  {
    categoryTitle: "Development tools",
    softwareDetails: [
      {
        toolName: "Jetbrains Tools",
        toolLogoSrc: jetbrains,
        toolDescription:
          "Jebrains is a cutting edge software that has specialized in building intelligent development tools. My favorite tool to use is Webstorm for Javascript based development. Other tools I've worked with include PyCharm for Python, IntelliJ for Java and Datagrip for data management. I've also been testing out Jetbrains Space as a complete software development platform with support for Version Control and Project management.",
      },
      {
        toolName: "Google Workspace",
        toolLogoSrc: googleWorkspace,
        toolDescription:
          "Google workspace provides a range of products users can work with, even collaboratively. Some of these tools include a Mail Service, G-suite, which contains Sheets, Docs, Presentation and development tools like firebase and Coogle Cloud Platform.",
      },
      {
        toolName: "Postman",
        toolLogoSrc: postman,
        toolDescription:
          "This is a tool for API development that enables users to easily use and test endpoints. It provides configurations like workspaces for better organizations and easily configurations with the desired effects of the endpoints. These includes authorization and header management to different data formatting for apis like JSON and form data.",
      },
      {
        toolName: "Git",
        toolLogoSrc: git,
        toolDescription:
          "Git is a free open source tool for distributed version control systems designed to handle projects with speed and efficiency. It integrates with different platforms like Github, Gitlab, Bitbucket for online project management.",
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
          <h1 className="text-white text-3xl font-bold mb-6">
            Software I prefer, how I write and other things I recommend.
          </h1>
          <p>
            I get queries on what programming languages I use and productivity
            tools for work management.
          </p>
        </div>
        {/* softwares i use */}
        <div className="w-9/12">
          <Softwares tools={tools} />
        </div>
      </div>
    </div>
  );
};

export default Tools;
