import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20 mr-50">
        <ul>

            Hi there, I am Nilesh Srivastava, living in Delhi. Currently studying B-Tech in Computer Science from VIT Bhopal University.
            <li>
            I know few languages like C, C++, Python, Java.
            </li>

            <li>
            Technologies learned are ReactJS, Flutter, MongoDB, Express RestAPI, NodeJS.
            </li>

            <li>
            I enjoy working and learning on new technologies as my hobby, currently learning web development on ReactJS.
            </li>
            <li>
            I have a special interest in Unix based OS like macOS and Linux. 
            </li>
        </ul>
        </p>

        <br />
      </div>
    </div>
  );
};

export default About;
