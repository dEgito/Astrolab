import Logo from "../../assets/logo.png";
import { Container } from "./style";

function Header() {
  return (
    <Container>
      <img src={Logo} alt="astrolab-logo" />
    </Container>
  );
}

export default Header;
