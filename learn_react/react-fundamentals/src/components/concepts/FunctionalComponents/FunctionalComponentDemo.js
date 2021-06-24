//all components are capitalized in Pascal Case

//functional components are just functions and they need to be called to be used 
//the call should have the same name as the func 
//they are usually called in the App.js file

//all jsx funcational components must be wrapped in one parent emelemtn
//this is bc JSX/React is unidirectional and you can't seat multiple elements within a func on the same level of the dom tree

import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Container,
    Row,
    Col
} from 'reactstrap';

const FunctionalComponentDemo = () => {
    return (
        <Container className='main'>
            <Row>
                <Col>
              

                <h1>Functional Component</h1>
                <dl>
                    <dt>Can use State
                    </dt>
                    <dd>With the 'useState' hook, functional components can now both render a display to the page and update the info shown.
                    </dd>
                     <dt>Not 'this' keyword
                    </dt>
                    <dd>only older class components use 'this' keyword
                    </dd>
                     <dt>can use effects
                    </dt>
                    <dd>with the useEffect hook functional components can perform side effect with any props or use states
                    </dd>
                     <dt>return
                    </dt>
                    <dd>must return a SINGLE element but it may have many more elements nested inside
                    </dd>
                    
                    <dt>More from the React Developers
                    </dt>
                  
                    <dd>
                    "Components let you split the UI into independent, reusable pieces that work in isolation."
                    </dd>
                    <dd>
                        Components can be written as functions or classes with methods.
                    </dd>
                    <dt>Rendering
                    </dt>
                    <dd>
                        Components are rendered on the screen using the DOM.  
                    </dd>
                    
                      <dt>syntax
                    </dt>
                    <dd>
                        Components always start with a capital letter.  Anything with a lower letter is treated as a DOM tag.  They use javascript or JSX.
                        </dd>
                    </dl>
                     </Col>
            </Row>
                <h1>Functional Syntax vs Arrow Function</h1>
            <h2>Challenge</h2>
            <Row>
                <Col md='6'>
                <HelloWorldFatArrow />
                </Col>
                
                <Col md='6'>
                <HelloWorld />
                </Col>
            </Row>
            </Container>   
        
);
};

const HelloWorld = function () {
    return (
        <div>
            <Card>
                <img width='100%' height='280px' src='https://www.codeproject.com/KB/showcase/1107846/image005.png' alt='card icon' />
                <CardBody>
                    <CardTitle>This is a regular function</CardTitle>
                    <CardSubtitle>Using vanilla javascript</CardSubtitle>
                    <CardText><pre>const HelloWorld = function( param ) statments in curly brackets</pre>
                    </CardText>
                </CardBody>
            </Card>
        </div>);
};

const HelloWorldFatArrow = () => {
    return (
        <div>
            <Card>
                <img width='100%' height='280px' src='https://www.codeproject.com/KB/showcase/1107846/image003.png' alt='card icon' />
                <CardBody>
                    <CardTitle>This is a fat arrow function</CardTitle>
                    <CardSubtitle>Using JSX within React</CardSubtitle>
                    <CardText><pre>"const HelloWorld = () => "</pre>
                    </CardText>
                </CardBody>
            </Card>
        </div>);
};

export default FunctionalComponentDemo;
//if we want this component to show up we have to import it into another components and call it 
