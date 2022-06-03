import Input from "../../components/Input";
import Logo from "../../assets/logo.png"
import { Container, Contents, Header } from "./style";


function Token() {
  return (
    <Container>
        <header>
            <h2>Verificação</h2>
            <p>Enviamos o código para o seu e-mail</p>
        </header>

        <Contents>
            <p>Digite o código de ativação:</p>
            <Input placeholder="000 000"/>
            <a>Não recebeu? <span>Reenviar</span></a>

            <footer>
                <img src={Logo} alt="logo-astrolab"/>
            </footer>
        </Contents>
        
    </Container>
  );
}

export default Token;
