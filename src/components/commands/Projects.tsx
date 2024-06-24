import { useContext, useEffect } from "react";
import { projects, projectsId } from "../../utils/constants";
import {
  checkRedirect,
  getCurrCmdArray,
  isArgInvalid,
} from "../../utils/funcs";
import { termContext } from "../Terminal";
import Usage from "../Usage";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectTitle,
  ProjectsIntro,
} from "../styles/Projects.styled";

const Projects = () => {
  const { arg, history, rerender } = useContext(termContext);

  // get current command
  const currCmd = getCurrCmdArray(history);

  // check if current command is redirect
  useEffect(() => {
    if (checkRedirect(rerender, currCmd, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currCmd]);

  // check if arg is valid
  const checkArg = () =>
    isArgInvalid(arg, "go", projectsId) ? <Usage cmd="projects" /> : null;

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

export default Projects;
