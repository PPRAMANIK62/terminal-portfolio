import React from "react";
import { UsageDiv } from "./styles/Output.styled";

type Props = {
  cmd: "themes" | "projects" | "socials";
  marginY?: boolean;
};

const arg = {
  themes: { placeholder: "theme-name", example: "ubuntu" },
  projects: { placeholder: "project-no", example: "4" },
  socials: { placeholder: "social-no", example: "1" },
};

const Usage: React.FC<Props> = ({ cmd, marginY }) => {
  const action = cmd === "themes" ? "set" : "go";

  return (
    <UsageDiv marginY={marginY}>
      Usage: {cmd} {action} &#60;{arg[cmd].placeholder}&#62; <br />
      eg: {cmd} {action} {arg[cmd].example}
    </UsageDiv>
  );
};

export default Usage;
