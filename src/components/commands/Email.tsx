import _ from "lodash";
import { useContext } from "react";
import { myMail } from "../../utils/constants";
import { termContext } from "../Terminal";
import { Wrapper } from "../styles/Output.styled";

const Email = () => {
  const { history, rerender } = useContext(termContext);

  // get current command
  const currCmd = _.split(history[0], " ");

  if (rerender && currCmd[0] === "email" && currCmd.length <= 1) {
    window.open("mailto:" + myMail, "_self");
  }

  return (
    <Wrapper>
      <span>{myMail}</span>
    </Wrapper>
  );
};

export default Email;
