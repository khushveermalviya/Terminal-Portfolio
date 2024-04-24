import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "BCA in Computer Application",
    desc: "Manipal University Jaipur | 2022 ~ Present",
  },
  {
    title: "Science and Biological Science",
    desc: "Gov. india | 2021 - 2022",
  }
];

export default Education;
