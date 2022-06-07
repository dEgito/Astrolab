import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Token from '../pages/Token';
import Welcome from '../pages/Welcome';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/home" element={<Home />}/>
                <Route exact path="/login" element={<Login />}/>
                <Route exact path="/cadastro" element={<Register />}/>
                <Route exact path="/validacao" element={<Token />}/>
                <Route exact path="/" element={<Welcome />}/>   
            </Switch>
        </Router>
    )
}

export default Routes;