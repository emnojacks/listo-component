import { useState } from 'react';
import { PropTypes } from 'prop-types';

const PropsDemo = () => {
    
const [ color, setColor ] = useState('white');
const [ backgroundColor, setBackgroundColor ] = useState('purple');
const [ borderRadius, setBorderRadius ] = useState('5px');
const [ borderStyle, setBorderStyle ] = useState('dashed');
const [ display, setDisplay ] = useState('inline-block');
const [ width, setWidth ] = useState('350px');
const [ textAlign, setTextAlign ] = useState('center');

    
let styles = {
color : color,
backgroundColor : backgroundColor,
borderRadius : borderRadius,
borderStyle : borderStyle,
display : display,
width : width,
textAlign : textAlign
};
    const toggleColor = () => {
        color === 'white' ? setColor('pink') : setColor('white');
    }
    
    const toggleBorderRadius = () => {
        borderRadius === '5px' ? setBorderRadius('10em') : setBorderRadius('5px');
    }
    
    const toggleBorderStyle = () => {
        borderStyle === 'dashed' ? setBorderStyle('solid') : setBorderStyle('dashed');
    }
    
    const toggleBgColor = () => {
        backgroundColor === 'purple' ? setBackgroundColor('gray') : setBackgroundColor('purple');
    }
    return (
        <div className='main'>
            <div className='mainDiv'>
                <div style={styles}>
                    <FunctionalComponent string='will this display?' function={toggleColor} selectedStyle={color}/>
                <FunctionalComponent string='Yes, yes it will?'function={toggleBorderRadius} selectedStyle={borderRadius} />
                    <FunctionalComponent string='Men are from mars women are from venus' function={toggleBgColor}selectedStyle={backgroundColor}/>
                    <FunctionalComponent string='Venus is better'function={toggleBorderStyle}selectedStyle={borderStyle} />
                </div>
                
            </div>
        </div>
    );
};

export default PropsDemo;

//child component that recieves props 

const FunctionalComponent = (props) => {
    return (<div>
        <p>
            {props.string}
        </p>
        <button onClick={props.function}>Press Me</button>
        <TinyComponent selectedStyle = {props.selectedStyle} />
    </div>
);

};


//Frequently, props will be passed not directly from the parent to the child, but through an intermediate component. 

const TinyComponent = (props) => {
    return (

        <div>
            <p>The current style is : {props.selectedStyle}</p>
        </div>
    );
};

FunctionalComponent.defaultProps = {
    string: PropTypes.string.isRequired,
    function: PropTypes.func.isRequired,
    selectedStyle: PropTypes.string.isRequired
};