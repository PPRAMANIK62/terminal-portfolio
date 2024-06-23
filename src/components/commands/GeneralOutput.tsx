import React from "react";
import { Wrapper } from "../styles/Output.styled";

type Props = {
  children: string;
};

const GeneralOutput: React.FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default GeneralOutput;
