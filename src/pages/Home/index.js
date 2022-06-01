import { Container } from "./style";
import Primary from "../../components/PrimaryButton";
import Secundary from "../../components/SecundaryButton"

function Home() {
  return (
    <Container>
      <header>
        <p>Bem vindo ao</p>
        <img src=""/>
      </header>

      <img />

      <div>
        <Primary>Login</Primary>
        <Secundary>Cadastro</Secundary>
      </div>
    </Container>
    );
}

export default Home;
