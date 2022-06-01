import { Teste, Container, Image, Buttons } from "./style";
import Primary from "../../components/PrimaryButton";
import Secundary from "../../components/SecundaryButton";
import Logo from "../../assets/logo.png";
import Planet from "../../assets/planet-icon.png";
import Coffee from "../../assets/Coffee.svg";

function Home() {
  return (
    <Container>
      <header>
        <p>Bem vindo ao</p>
        <img src={Logo} />
      </header>

      <Image src={Planet} />

      <Buttons>
        <Primary>Login</Primary>
        <Secundary>Cadastro</Secundary>
      </Buttons>

      <footer>
        <span>
          Create with <img src={Coffee} /> by
          <a href="https://github.com/dEgito" target="_blank">@dEgito</a>
        </span>
      </footer>
    </Container>
  );
}

export default Home;
