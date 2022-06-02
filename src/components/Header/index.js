import Logo from "../../assets/logo.png";
import { Container } from "./style";

function Header() {
  return (
    <Container>
      <a>
        <img />
      </a>
      <img src={Logo} alt="astrolab-logo" />
    </Container>
  );
}

export default Header;