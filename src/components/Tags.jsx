export const H1 = ({ children, className }) => {
  return <h1 className={className}>{children}</h1>;
};

export const H2 = ({ children, className }) => {
  return <h2 className={className}>{children}</h2>;
};

export const P = ({ children, className }) => {
  return <p className={className}>{children}</p>;
};

export const A = ({ children, className, link, target, rel }) => {
  return (
    <a className={className} href={link} target={target} rel={rel}>
      {children}
    </a>
  );
};

export const DIV = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export const UL = ({ children, className }) => {
  return <ul className={className}>{children}</ul>;
};

export const LI = ({ children, className }) => {
  return <li className={className}>{children}</li>;
};
