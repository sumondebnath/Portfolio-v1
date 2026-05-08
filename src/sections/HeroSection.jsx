import { Heading } from "../components/Heading";
import { DIV } from "../components/Tags";

export const HeroSection = () => {
  const name = "Sumon Debnath";
  const designation = "Not Gain Yet";
  const description =
    "Give if you want, but we do not have any. But giving this oportunity i am greatful!";
  return (
    <DIV>
      <Heading
        name={name}
        designation={designation}
        description={description}
      />
    </DIV>
  );
};
