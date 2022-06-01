import { Teste, Container, Image, Buttons } from "./style";
import Primary from "../../components/PrimaryButton";
import Secundary from "../../components/SecundaryButton";
import Logo from "../../assets/logo.png";
import Planet from "../../assets/planet-icon.png";

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
    </Container>
  );
}

export default Home;
