import Input from "../../components/Input";
import Footer from "../../components/Footer";
import Primary from "../../components/PrimaryButton";

import { Container, Contents } from "./style";
import { Link } from "react-router-dom";

function Token() {
  return (
    <Container>
      <header>
        <h2>Verificação</h2>
        <p>Enviamos o código para o seu e-mail</p>
      </header>

      <Contents>
        <p>Digite o código de ativação:</p>
        <Input type="token" placeholder="000 000" />

        <Link to="/">
          <a>
            Não recebeu? <span>Reenviar</span>
          </a>
        </Link>

        <Link to="/welcome">
          <Primary type="submit">Enviar</Primary>
        </Link>
        <Footer />
      </Contents>
    </Container>
  );
}

export default Token;
