import Input from "../../components/Input";
import Footer from "../../components/Footer";

import { Container, Contents } from "./style";

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
        <a>
          Não recebeu? <span>Reenviar</span>
        </a>

        <Footer />
      </Contents>
    </Container>
  );
}

export default Token;
