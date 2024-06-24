import { commands } from "../../utils/constants";
import { generateTabs } from "../../utils/funcs";
import {
  Cmd,
  CmdDesc,
  CmdList,
  HelpWrapper,
  KeyContainer,
} from "../styles/Help.styled";

const Help = () => {
  return (
    <HelpWrapper>
      {commands.map(({ cmd, desc, tab }) => (
        <CmdList key={cmd}>
          <Cmd>{cmd}</Cmd>
          {generateTabs(tab)}
          <CmdDesc>- {desc}</CmdDesc>
        </CmdList>
      ))}

      <KeyContainer>
        <div>Tab or Ctrl + i&nbsp; =&gt; autocompletes the command</div>
        <div>Up arrow {generateTabs(5)} =&gt; go back to previous command</div>
        <div>Ctrl + l {generateTabs(5)} =&gt; clear the terminal</div>
      </KeyContainer>
    </HelpWrapper>
  );
};

export default Help;
