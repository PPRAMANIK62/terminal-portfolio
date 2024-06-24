import { useContext, useEffect } from "react";
import { termContext } from "../Terminal";
import { UsageDiv } from "../styles/Output.styled";

const Clear = () => {
  const { arg, clearHistory } = useContext(termContext);

  useEffect(() => {
    if (arg.length < 1) clearHistory?.();
  }, []);

  return arg.length > 0 ? <UsageDiv>Usage: clear</UsageDiv> : <></>;
};

export default Clear;
