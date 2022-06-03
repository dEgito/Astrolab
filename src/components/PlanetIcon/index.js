import Planeticon from "../../assets/Frame 5.png"
import Polygon1 from "../../assets/Frame 3.png"
import Polygon2 from "../../assets/Frame 4.png"

import { Container, Planet, PurplePolygon, WhitePolygon } from "./style";

function Icon (){
    return (
        <Container>
            <Planet src={Planeticon}/>
            <PurplePolygon src={Polygon1}/>
            <WhitePolygon src={Polygon2}/>
        </Container>
    )
}

export default Icon;