import Primary from "../../components/PrimaryButton";
import Header from "../../components/Header";

import FloatButton from "../../components/FloatButton";
import { Container, Contents } from "./style";
import Icon from "../../components/PlanetIcon";
import { Link } from "react-router-dom";

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
          <Link to="disable">
            <Primary>Jogar</Primary>
          </Link>

          <FloatButton />
        </Contents>
      </Container>
    </>
  );
}

export default Welcome;
