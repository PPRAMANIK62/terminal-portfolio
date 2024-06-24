import _ from "lodash";
import { useContext } from "react";
import { termContext } from "../Terminal";
import { Wrapper } from "../styles/Output.styled";

const Echo = () => {
  const { arg } = useContext(termContext);

  let outputStr = _.join(arg, " ");
  // remove trailing single quotes ''
  outputStr = _.trim(outputStr, "'");
  // remove trailing double quotes ""
  outputStr = _.trim(outputStr, '"');
  // remove trailing backtick ``
  outputStr = _.trim(outputStr, "`");

  return <Wrapper>{outputStr}</Wrapper>;
};

export default Echo;
