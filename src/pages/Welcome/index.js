import Footer from "../../components/Footer";
import Primary from "../../components/PrimaryButton";

import Planet from "../../assets/polygon-planet.png";
import { Container, Image } from "./style";

function Welcome() {
  return (
    <>
      <Container>
        <div>
          <h3>SEU ACESSO FOI LIBERADO</h3>
          <p>
            Seja muito bem-vinde,
            <br />
            <span>Tripulante</span>!
          </p>
        </div>

        <Image src={Planet} />
        <Primary>Jogar</Primary>
        <Footer />
      </Container>
    </>
  );
}

export default Welcome;
