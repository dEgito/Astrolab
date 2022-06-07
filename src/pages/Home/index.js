import { Container, Buttons } from "./style";
import Primary from "../../components/PrimaryButton";
import Secundary from "../../components/SecundaryButton";
import Logo from "../../assets/images/logo.png";
import Coffee from "../../assets/images/Coffee.svg";
import Icon from "../../components/PlanetIcon";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container>
      <header>
        <p>Bem vindo ao</p>
        <img src={Logo} alt="astrolab-logo" />
      </header>

      <Icon />
      <Buttons>
        <Link to="/login">
          <Primary>Login</Primary>
        </Link>

        <Link to="/cadastro">
          <Secundary>Cadastro</Secundary>
        </Link>
      </Buttons>

      <footer>
        <span>
          Create with <img src={Coffee} alt="icone-café" /> by
          <a href="https://github.com/dEgito" target="_blank">
            @dEgito
          </a>
        </span>
      </footer>
    </Container>
  );
}

export default Home;
