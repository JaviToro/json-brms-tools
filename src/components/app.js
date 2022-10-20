import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Documentation from '../routes/documentation';
import About from '../routes/about';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<Documentation path="/documentation" />
			<About path="/about" />
		</Router>
	</div>
)

export default App;
