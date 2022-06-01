import { Container } from "./style";
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

      <img src={Planet} />

      <div>
        <Primary>Login</Primary>
        <Secundary>Cadastro</Secundary>
      </div>
    </Container>
  );
}

export default Home;
