import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Purbayan Pramanik</HighlightSpan>!
      </p>
      <p>
        I&apos;m <HighlightAlt>a full-stack developer</HighlightAlt> based in
        Kolkata, India
      </p>
      <p>
        I am passionate about writing code and <br />
        developing web applications to solve real-life challenges.
      </p>
    </AboutWrapper>
  );
};

export default About;
