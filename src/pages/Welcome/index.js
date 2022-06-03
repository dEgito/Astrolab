import Footer from "../../components/Footer";
import Primary from "../../components/PrimaryButton";
import Header from "../../components/Header";

import Planet from "../../assets/polygon-planet.png";
import FloatButton from "../../components/FloatButton"
import { Container, Contents, Image } from "./style";
import Icon from "./components/PlanetIcon";

function Welcome() {
  return (
    <>
      <Container>
        <Header />

        <Contents>
          <div>
            <h3>SEU ACESSO FOI LIBERADO</h3>
            <p>
              Seja muito bem-vinde,
              <br />
              <span>Tripulante</span>!
            </p>
          </div>

          {/* <Image src={Planet} /> */}
          <Icon />
          <Primary>Jogar</Primary>
          <FloatButton />
        </Contents>
      </Container>
    </>
  );
}

export default Welcome;
