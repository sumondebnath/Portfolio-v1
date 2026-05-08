import { DIV, H1, H2, P } from "./Tags";

export const Heading = ({ name, designation, description }) => {
  return (
    <DIV>
      <H1>{name}</H1>
      <H2>{designation}</H2>
      <P>{description}</P>
    </DIV>
  );
};
