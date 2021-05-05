import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import Button from 'react-bootstrap/Button'
//import Form from 'react-bootstrap/Form'
import {Form, Button, Navbar, Nav,FormControl} from 'react-bootstrap';
import {FacebookLoginButton, LinkedInLoginButton} from 'react-social-login-buttons';
import imagee from './imagee.jpg';




function App() {
  return (
    <div className='divContainer'>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
  <div className='grid'>
    <div className='containerImg'>
      <h1 class='whitep'>Welcome to our website</h1>
      <h3 class='whitep1'>Create your account and be among our community</h3>
    
  

    </div>
    <div className='container'>
    <svg color='#007bff' xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
    </svg>   
     <Form className="login-form">
      <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
         We'll never share your email with anyone else.
      </Form.Text>
      </Form.Group>

    <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
      
    </Form>
    <div className='text-center'>Or continue with your social account</div>
    <FacebookLoginButton className='btn-lg btn-block' width='100px'/>
    <LinkedInLoginButton/>

    </div>
    </div>
    </div>
  );
}

export default App;
