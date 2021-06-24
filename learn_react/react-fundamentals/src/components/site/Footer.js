import { Row } from 'reactstrap';
//functional component is basically just a standard JavaScript/ES6 function that returns a React element
const Footer = () => {
    return (
        <footer> <Row>
        <p> &copy; Eleven Fifty 2021 </p>
        </Row>
        </footer>
    );
};

export default Footer;