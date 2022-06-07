import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300">
      {/*container*/}
      <div>
        <p>Experience</p>
        <p>Techologies I have familier with</p>
      </div>

      <div>
        <div>
          <img src={HTML} alt="HTML icon" />
          <p>HTML</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
