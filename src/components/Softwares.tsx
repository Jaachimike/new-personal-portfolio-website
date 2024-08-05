import React from "react";

interface SoftwareDetail {
  toolName: string;
  toolLogoSrc: string;
  // yearsOfExperience: number;
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
        <div
          key={categoryIndex}
          className="grid grid-cols-3 border-l border-gray-700 pl-5 mb-20"
        >
          {/* category title */}
          <div className="text-sm text-white font-bold">
            <h2>{category.categoryTitle}</h2>
          </div>
          {/* software list */}
          <div className="col-span-2">
            {category.softwareDetails.map((software, softwareIndex) => (
              <div key={softwareIndex} className="mb-10">
                {/* title and logo */}
                <div className="flex justify-between mb-6">
                  <div className="flex flex-col justify-between">
                    <p className="text-white">{software.toolName}</p>
                    {/* <p className="italic">{software.yearsOfExperience} years</p> */}
                  </div>
                  <div>
                    <img
                      src={software.toolLogoSrc}
                      alt={`${software.toolName} logo`}
                      className="h-16 w-20"
                    />
                  </div>
                </div>
                {/* description */}
                <div>
                  <p className="text-sm leading-7">
                    {software.toolDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Softwares;
