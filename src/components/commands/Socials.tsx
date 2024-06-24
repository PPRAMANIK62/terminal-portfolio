import { useContext, useEffect } from "react";
import { socials, socialsId } from "../../utils/constants";
import {
  checkRedirect,
  generateTabs,
  getCurrCmdArray,
  isArgInvalid,
} from "../../utils/funcs";
import { termContext } from "../Terminal";
import Usage from "../Usage";
import { Cmd, CmdDesc, CmdList, HelpWrapper } from "../styles/Help.styled";
import { ProjectsIntro } from "../styles/Projects.styled";

const Socials = () => {
  const { arg, history, rerender } = useContext(termContext);

  // get current command
  const currCmd = getCurrCmdArray(history);

  // check if current command makes redirect
  useEffect(() => {
    if (checkRedirect(rerender, currCmd, "socials")) {
      socials.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currCmd]);

  // check if arg is valid
  const checkArg = () =>
    isArgInvalid(arg, "go", socialsId) ? <Usage cmd="socials" /> : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <HelpWrapper data-testid="socials">
      <ProjectsIntro>Here are my social links</ProjectsIntro>

      {socials.map(({ id, title, url, tab }) => (
        <CmdList key={title}>
          <Cmd>{`${id}. ${title}`}</Cmd>
          {generateTabs(tab)}
          <CmdDesc>- {url}</CmdDesc>
        </CmdList>
      ))}
      <Usage cmd="socials" marginY />
    </HelpWrapper>
  );
};

export default Socials;
