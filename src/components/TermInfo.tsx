import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled.tsx";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>visitor</User>@<WebsiteName>terminal.purbayan.dev</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
