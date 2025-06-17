import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export const Socials = () => {
  return (
    <div className="socials">
      <div className="socials-icon-container">
        <FaFacebookF className="socials-icon" />
      </div>
      <div className="socials-icon-container">
        <FaInstagram className="socials-icon" />
      </div>
      <div className="socials-icon-container">
        <FaSnapchatGhost className="socials-icon" />
      </div>
      <div className="socials-icon-container">
        <FaXTwitter className="socials-icon" />
      </div>
      <div className="socials-icon-container">
        <FaLinkedinIn className="socials-icon" />
      </div>
    </div>
  );
};
