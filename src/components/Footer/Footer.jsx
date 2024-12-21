import React from 'react';
import './footer.css';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const quick__links = [
  { path: '/home', display: 'Home' },
  { path: '/about', display: 'About' },
  { path: '/tours', display: 'Tours' },
];

const quick__links2 = [
  { path: '/gallery', display: 'Gallery' },
  { path: '/login', display: 'Login' },
  { path: '/register', display: 'Register' },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
    
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="Logo" className="logo-img" />
              <p className="footer-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nisi nec risus pretium volutpat.</p>
            </div>
            <div className="social__links d-flex align-items-center gap-3">
              <Link to="#" className="social-link"><i className="ri-youtube-line"></i></Link>
              <Link to="#" className="social-link"><i className="ri-github-fill"></i></Link>
              <Link to="#" className="social-link"><i className="ri-facebook-circle-line"></i></Link>
              <Link to="#" className="social-link"><i className="ri-instagram-line"></i></Link>
            </div>
          </Col>

   
          <Col lg="3">
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path} className="footer-link">{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3">
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path} className="footer-link">{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

      
          <Col lg="3">
            <h5 className="footer__link-title">Contact</h5>
            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2"><i className="ri-map-pin-line"></i> Address:</h6>
                <p className="mb-0">Sylhet, Bangladesh</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2"><i className="ri-mail-line"></i> Email:</h6>
                <p className="mb-0">email01@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2"><i className="ri-phone-fill"></i> Phone:</h6>
                <p className="mb-0">+0123456789</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        
      
        <Row>
          <Col lg="12" className="text-center pt-5">
            <p className="copyright">Copyright &copy; {year}, Design and Developed by YourCompany</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
