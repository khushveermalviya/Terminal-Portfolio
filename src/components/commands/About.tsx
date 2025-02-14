import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Khushveer Malviya</HighlightSpan>!
      </p>
      <p>
   I'm <HighlightAlt>a full-stack developerAs well AS deveops Enginner</HighlightAlt>From
        india ,Rajasthan
      </p>
      <p>
        I am passionate about writing codes and <br />
        developing web applications to solve real-life challenges.
      </p>
    </AboutWrapper>
  );
};

export default About;
