import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const NavigationBar = (props) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src='./bootstrap-react-logo.svg'
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