import Primary from "../../components/PrimaryButton";
import Header from "../../components/Header";

import FloatButton from "../../components/FloatButton"
import { Container, Contents } from "./style";
import Icon from "../../components/PlanetIcon";

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
          
          <Icon />
          <Primary>Jogar</Primary>
          <FloatButton />
        </Contents>
      </Container>
    </>
  );
}

export default Welcome;
