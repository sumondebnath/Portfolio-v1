import { DIV, H1, H2, P } from "./Tags";

export const Heading = ({ name, designation, description }) => {
  return (
    <DIV className="my-7">
      <H1 className=" text-3xl py-2">{name}</H1>
      <H2 className="py-2">{designation}</H2>
      <P className="py-2">{description}</P>
    </DIV>
  );
};
