import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  Redirect
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';


import Scoreboard from "./components/Scoreboard/index"
import Dashboard from "./components/profile/index"



function App() {

  let history = useHistory();

  return (
    <>

    
      <Navbar className="bgcolor1" expand="lg">
      <Container>
          <Navbar.Brand href="#home">React Login project</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => { history.push("/") }}>Admin Panel</Nav.Link>
              <Nav.Link onClick={() => { history.push("/scoreboard") }}>Score Board</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      




        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/scoreboard" component={Scoreboard} />

          <Redirect to="/" />
        </Switch>
      



    </>
  );
}

export default App;