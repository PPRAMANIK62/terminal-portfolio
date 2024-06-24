import _ from "lodash";
import { useContext } from "react";
import { termContext } from "../Terminal";
import { Wrapper } from "../styles/Output.styled";

const History = () => {
  const { history, index } = useContext(termContext);
  const currHist = _.reverse(_.slice(history, index));

  return (
    <Wrapper>
      {currHist.map((cmd) => (
        <div key={_.uniqueId(`${cmd}_`)}>{cmd}</div>
      ))}
    </Wrapper>
  );
};

export default History;
