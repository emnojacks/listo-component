import {Link} from 'react-router-dom';

const Home =()=> {
return (
<div className = 'main'>
<div className = "mainDiv">
<h1>Welcome to React Fundamentals at Eleven Fifty
</h1>
<p>
This app is intended to be a started app for your upcoming project and a learning sandbox for you in the months and years to come should you continue to develope software in React. In this application, we will work through some of the basic React concepts, build some small apps, and then unleash you to build your own apps.
</p>
<hr />
<h1>Important Notes</h1>
<ul>
<li>
Being component based, you can move onto the next module.
</li>
<li>
The styling is intentionally left bland in some spots- just a sandbox.
</li>
<li>
At this phase, this site is not yet responsive.
</li>
<li>
Refactor the text on this page and make it your own project.
</li>
<li>
We collected the best resources for this app, and have cited them <Link to="/resources">here</Link>
</li>

<li>
<Link to="/resources">React Resources</Link>
</li>
</ul>
</div>
</div>
);
};

export default Home;
