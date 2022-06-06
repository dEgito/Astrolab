import { Button } from "./style";
import Github from "../../assets/images/github-icon.svg";

function FloatButton({ children }) {
  return (
    <a href="https://github.com/dEgito" target="_blank">
      <Button>
        <img src={Github} alt="icone-github"/>
      </Button>
    </a>
  );
}

export default FloatButton;
