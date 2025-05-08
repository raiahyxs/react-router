import React from "react";
import "./ProjectsSection.css";
import { FaLaptopCode, FaPen, FaDatabase, FaRocket, FaMapSigns } from "react-icons/fa";
import { BsLaptop, BsSearch, BsGraphUp } from "react-icons/bs";
import { FaCalculator } from "react-icons/fa6";

const chunkArray = (arr, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
};

const ProjectsSection = () => {
  const rotations = [-21, 7, 25, 10, -15, 30, 5, -10, 20];
  const icons = [
    <FaCalculator />,
    <FaLaptopCode />,
    <FaPen />,
    <FaDatabase />,
    <FaRocket />,
    <FaMapSigns />,
    <BsLaptop />,
    <BsSearch />,
    <BsGraphUp />,
  ];
  const projects = [
    { name: "Calculator" },
    { name: "Portal" },
    { name: "Fanpage" },
    { name: "E-commerce" },
    { name: "Dashboard" },
    { name: "Blog" },
    { name: "Portfolio" },
    { name: "Landing Page" },
    { name: "Task Manager" },
  ];
  const projectRows = chunkArray(projects, 3);

  return (
    <section className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      {projectRows.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((project, index) => {
            const rotationValue = rotations[index] ?? 0;
            const icon = icons[rowIndex * 3 + index] ?? <FaPen />;
            const delay = (rowIndex * 3 + index) * 0.1;

            return (
              <div
                key={project.name + index}
                className="glass"
                data-text={project.name}
                style={{
                  "--r": rotationValue,
                  "--delay": `${delay}s`,
                }}
              >
                <div className="card-content">
                  <h3 className="project-icon">{icon}</h3>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </section>
  );
};

export default ProjectsSection;
