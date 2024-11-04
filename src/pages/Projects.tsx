import ProjectDisplay from "../components/ProjectDisplay";
import {motion} from "framer-motion";
import fragg from "../assets/jpg/fragg.png";
import coalition from "../assets/jpg/coalition.7c6ca830a96820804f45.png";
import amadeus from "../assets/jpg/amadeus.png";

const Projects = () => {
  // Sample project data
  const projects = [
    {
      title: "Fragg Investment Ltd",
      imageUrl: fragg,
      liveUrl: "https://fragginvest.com",
      // githubUrl: "https://github.com/August-Deep-Tech/Fragg-Website",
    },
    {
      title: "Amadeus University",
      imageUrl: amadeus,
      liveUrl: "https://amadeus.edu.ng/",
      // githubUrl:
      //   "https://github.com/August-Deep-Tech/Amadeus-University-Website",
    },
    {
      title: "Coalition Technologies",
      imageUrl: coalition,
      liveUrl: "https://dashing-smakager-42ba57.netlify.app/",
      githubUrl: "https://github.com/Jaachimike/coalitionwebsite",
    },

    // Add more projects as needed
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="py-8 sm:py-12 md:py-16 lg:py-24">
        {/* writeup */}
        <motion.div
          initial={{x: -40, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.4}}
          className="w-full md:w-11/12 lg:w-9/12 mb-6 sm:mb-8 md:mb-10"
        >
          <h1 className="text-white text-3xl font-bold mb-6">
            I've made a mark on ...
          </h1>
        </motion.div>
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {projects.map((project, index) => (
            <ProjectDisplay
              key={index}
              title={project.title}
              imageUrl={project.imageUrl}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
