//all the elements we import from react router dom that we use in our app 
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';

import Home from './Home';
import Resources from "./Resources";
import FunctionalComponentDemo from '../concepts/FunctionalComponents/FunctionalComponentDemo';
import JSXRules from '../concepts/JSXRules';
import State from '../concepts/State';
import Effects from '../concepts/Effects';
import PropsDemo from '../concepts/PropsDemo';
import Hooks from '../concepts/Hooks';
import TimePiecesApp from '../apps/timer-apps/TimePiecesApp';
import NytApp from '../apps/nyt-app/NytApp';
import Bitcoin from '../apps/bitcoin-api-app/Bitcoin'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to='/'>Home</Link>
                    </li>
                    <li><Link to='/resources'>Resources</Link>
                    </li>
                    <li><Link to='/functionalcomponent'>Functional Component</Link>
                    </li>
                    <li><Link to='/jsxrules'>JSX Rules</Link>
                    </li>
                     <li><Link to='/state'>State</Link>
                    </li>
                    <li><Link to='/effects'>Effects</Link>
                    </li>
                    <li><Link to='/propsdemo'>Props Demo</Link>
                    </li>
                     <li><Link to='/hooks'>Hooks</Link>
                    </li>
                     <li><Link to='/timer'>Timers</Link>
                    </li>
                     <li><Link to='/nytapp'>NYT App</Link>
                    </li>
                    <li><Link to='/bitcoin'>Bitcoin App</Link>
                    </li> 
                </ul>
            </div>
            
          
            <div className='sidebar-route'>
                <Switch>
                  
                    <Route exact path='/home'><Home /></Route>
                    <Route exact path='/resources'><Resources /></Route>
                    <Route exact path='/'><Home /></Route>
                    <Route exact path='/functionalcomponent'><FunctionalComponentDemo /></Route>
                    <Route exact path='/jsxrules'><JSXRules /></Route>
                    <Route exact path='/state'><State /></Route>
                    <Route exact path='/effects'><Effects /></Route>
                    <Route exact path='/propsdemo'><PropsDemo /></Route>
                    <Route exact path='/hooks'><Hooks /></Route>
                    <Route exact path='/timer'><TimePiecesApp /></Route>
                    <Route exact path='/nytapp'><NytApp /></Route>
                    <Route exact path='/bitcoin-api-app'><Bitcoin /></Route> 
                    
                </Switch>
            </div>
        </div>
    );
};
//above tells the router where to go when the links are clicked 
//switch makes sure only one path is true at once 


export default Sidebar;