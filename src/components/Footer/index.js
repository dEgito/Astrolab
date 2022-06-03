import Logo from "../../assets/logo.png";
import { Contents } from "./style";

function Footer() {
  return (
    <Contents>
      <a href="https://github.com/dEgito/Astrolab" target="_blank">
        <img src={Logo} alt="logo-astrolab" />
      </a>
    </Contents>
  );
}

export default Footer;
