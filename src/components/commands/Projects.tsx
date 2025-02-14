import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Edusystem.tech (School Management System)",
    desc: `Developed a full-stack application using React, Tailwind CSS, Express.js, GraphQL, and SQL, with Redis for caching, Selenium for testing, and Grafana with Prometheus for monitoring.
           Implemented JWT authentication, Zustand for state management, and local session storage.
           Deployed the backend on an Azure machine using Docker containers and GitHub Actions.
           Developed a student-centric mobile app using Capacitor/Ionic, featuring Chart.js visualizations, AI chat, and group discussion capabilities using WebSocket.
           Features include student/parent and admin panels, attendance system, fee management, report generation, timetable management, and other school-related functionalities.
           Currently live and prepared for launch in a school setting, demonstrating the system's readiness for real-world implementation and its potential to enhance school operations.`,
    url: "https://edusystem.tech",
  },
];

export default Projects;
