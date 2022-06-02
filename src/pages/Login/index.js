import Primary from "../../components/PrimaryButton";
import Secundary from "../../components/SecundaryButton";

import Header from "../../components/Header";
import { Container, Contents, Buttons } from "./style";
import Input from "../../components/Input";
import Google from "../../assets/google-icon.png";

function Login() {
  return (
    <Container>
      <Header />

      <Contents>
        <Primary type="google">
          <span>
            <img src={Google} />
          </span>
          Entrar com Google
        </Primary>
        <p>ou</p>

        <div>
          <Input placeholder="Usuário" />
          <Input placeholder="Senha" />
          <a>Esqueceu a senha?</a>
        </div>

        <Buttons>
          <Primary>Login</Primary>
          <Secundary>Criar conta</Secundary>
        </Buttons>
      </Contents>
    </Container>
  );
}

export default Login;
