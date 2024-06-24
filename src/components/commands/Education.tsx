import { eduBg } from "../../utils/constants";
import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education = () => {
  return (
    <Wrapper>
      <EduIntro>Here is my education background!</EduIntro>

      {eduBg.map(({ desc, title }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

export default Education;
