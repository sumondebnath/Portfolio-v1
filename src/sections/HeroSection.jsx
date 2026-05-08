import { Heading } from "../components/Heading";
import { Socials } from "../components/Socials";
import { DIV } from "../components/Tags";

export const HeroSection = () => {
  const name = "Sumon Debnath";
  const designation = "Learner | Tech Enthusiast";
  const description =
    "Give if you want, but we do not have any. But giving this oportunity i am greatful!";
  return (
    <DIV>
      <Heading
        name={name}
        designation={designation}
        description={description}
      />
      <Socials />
    </DIV>
  );
};
