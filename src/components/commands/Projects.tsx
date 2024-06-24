import { useContext, useEffect } from "react";
import { projects, projectsId } from "../../utils/constants";
import {
  checkRedirect,
  getCurrCmdArray,
  isArgInvalid,
} from "../../utils/funcs";
import { termContext } from "../Terminal";
import Usage from "../Usage";

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
    <div data-testid="projects"></div>
  );
};

export default Projects;
