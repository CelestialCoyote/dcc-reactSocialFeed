import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
//import logo from '../NavigationBar/bootstrap-react-logo.svg';
import logo from './bootstrap-react-logo.svg';


const NavigationBar = (props) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Social Feed
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};


export default NavigationBar;