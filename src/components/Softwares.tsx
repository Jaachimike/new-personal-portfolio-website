import React from "react";
import jetbrains from "../assets/svg/tools/jetbrains.svg";

const Softwares = () => {
  return (
    <div className="flex gap-20 border-l border-gray-700 pl-5">
      {/* category title */}
      <div className="text-sm text-white font-bold">
        <h2>Development tools</h2>
      </div>
      {/* software list */}
      <div className="flex-1">
        {/* list one */}
        <div>
          {/* title and logo */}
          <div className="flex justify-between mb-6">
            <div className="flex flex-col justify-between">
              <p className="text-white">Jetbrains Tools</p>
              <p className=" italic">8 years</p>
            </div>
            <div>
              <img src={jetbrains} alt="software logo" className="h-16" />
            </div>
          </div>
          {/* description */}
          <div>
            <p className="text-sm leading-7">
              Jebrains is a cutting edge software that has specialized in
              building intelligent development tools. My favorite tool to use is
              Webstorm for Javascript based development. Other tools I've worked
              with include PyCharm for Python, IntelliJ for Java and Datagrip
              for data management. I've also been testing out Jetbrains Space as
              a complete software development platform with support for Version
              Control and Project management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Softwares;
