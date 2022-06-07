import Primary from "../../components/PrimaryButton";
import Secundary from "../../components/SecundaryButton";
import Input from "../../components/Input";
import Header from "../../components/Header";
import FloatButton from "../../components/FloatButton";
import Google from "../../assets/images/google-icon.png";
import { Container, Contents, Buttons } from "./style";
import { Link } from "react-router-dom";

function Register() {
  return (
    <Container>
      <Header />
      <Contents>
        <Primary type="google">
          <span>
            <img src={Google} alt="icone-google" />
          </span>
          Entrar com Google
        </Primary>
        <p>ou</p>

        <div>
          <Input placeholder="Usuário" />
          <Input placeholder="E-mail" />
          <Input placeholder="Senha" />
          <Input placeholder="Confirmação de senha" />
        </div>

        <Buttons>
          <Link to="/validacao">
            <Primary type="submit">Cadastrar</Primary>
          </Link>

          <Link to="/login">
            <Secundary>Já tenho conta</Secundary>
          </Link>
        </Buttons>

        <FloatButton />
      </Contents>
    </Container>
  );
}

export default Register;
