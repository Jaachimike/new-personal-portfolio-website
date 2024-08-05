import React from "react";
import {motion} from "framer-motion";

interface ProjectProps {
  title: string;
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
}

const ProjectDisplay = ({
  title,
  imageUrl,
  liveUrl,
  githubUrl,
}: ProjectProps) => {
  return (
    <motion.div
      className="bg-gray-600 rounded-lg shadow-md overflow-hidden"
      initial={{opacity: 0, y: 50}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      whileHover={{scale: 1.05}}
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 h-full flex flex-col">
        <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>

        <div className="flex justify-between">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors"
          >
            Live Site
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-black transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDisplay;
