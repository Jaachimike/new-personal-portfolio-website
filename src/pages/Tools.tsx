import React from "react";
import Softwares from "../components/Softwares";

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
          <Softwares />
        </div>
      </div>
    </div>
  );
};

export default Tools;
