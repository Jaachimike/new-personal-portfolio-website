import React from "react";
import {motion} from "framer-motion";

interface SoftwareDetail {
  toolName: string;
  toolLogoSrc: string;
  toolDescription: string;
}

interface ToolCategory {
  categoryTitle: string;
  softwareDetails: SoftwareDetail[];
}

interface SoftwaresProps {
  tools: ToolCategory[];
}

const Softwares = ({tools}: SoftwaresProps) => {
  return (
    <div>
      {tools.map((category, categoryIndex) => (
        <motion.div
          key={categoryIndex}
          className="grid grid-cols-3 gap-4 border-l border-gray-700 pl-5 mb-20"
          initial={{opacity: 0, x: -50}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.5, delay: categoryIndex * 0.2}}
        >
          {/* category title */}
          <motion.div
            className="text-sm text-white font-bold"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: categoryIndex * 0.2 + 0.2}}
          >
            <h2>{category.categoryTitle}</h2>
          </motion.div>
          {/* software list */}
          <div className="col-span-2">
            {category.softwareDetails.map((software, softwareIndex) => (
              <motion.div
                key={softwareIndex}
                className="mb-10"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{
                  duration: 0.5,
                  delay: categoryIndex * 0.2 + softwareIndex * 0.1 + 0.3,
                }}
              >
                {/* title and logo */}
                <div className="flex justify-between mb-6">
                  <motion.div
                    className="flex flex-col justify-between"
                    whileHover={{scale: 1.05}}
                  >
                    <p className="text-white font-semibold">
                      {software.toolName}
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{rotate: 360}}
                    transition={{duration: 0.5}}
                  >
                    <img
                      src={software.toolLogoSrc}
                      alt={`${software.toolName} logo`}
                      className="h-10 w-16"
                    />
                  </motion.div>
                </div>
                {/* description */}
                <motion.div
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{
                    duration: 0.5,
                    delay: categoryIndex * 0.2 + softwareIndex * 0.1 + 0.5,
                  }}
                >
                  <p className="text-sm leading-7">
                    {software.toolDescription}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Softwares;
