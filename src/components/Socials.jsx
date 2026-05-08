import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { PiLinktreeLogoFill } from "react-icons/pi";
import { A, LI, UL } from "./Tags";

export const Socials = () => {
  const iconStyle = "w-6 h-6 text-slate-300";
  return (
    <UL className="flex gap-4">
      <LI>
        <A
          link="https://github.com/sumondebnath"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className={iconStyle} />
        </A>
      </LI>

      <LI>
        <A
          link="https://www.linkedin.com/in/sumon-debnath/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className={iconStyle} />
        </A>
      </LI>

      <LI>
        <A
          link="https://linktr.ee/sumondebnath"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PiLinktreeLogoFill className={iconStyle} />
        </A>
      </LI>

      <LI>
        <A
          link="https://www.facebook.com/sumon1708/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className={iconStyle} />
        </A>
      </LI>

      <LI>
        <A
          link="https://www.instagram.com/sum_____on/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className={iconStyle} />
        </A>
      </LI>
    </UL>
  );
};
