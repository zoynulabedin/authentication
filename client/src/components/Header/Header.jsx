			import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {

  return (
		<Navbar bg="light" expand="lg">
			<Container fluid>
				<Navbar.Brand href="#">User Directory</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: "100px" }}
						navbarScroll>
						<Nav.Link href="/">Users</Nav.Link>
						<Nav.Link href="/profile">Profile</Nav.Link>
					</Nav>

					<Nav
						className="me-auto my-2 my-lg-0 d-flex justify-content-end"
						style={{ maxHeight: "100px" }}
						navbarScroll>
						<Nav.Link href="/login">Sign In</Nav.Link>
						<Nav.Link href="/register">Sign up</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);

}

export default Header