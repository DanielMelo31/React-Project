import Index from './pages';
import './styles/App.css';
import RhodesianInfoPage from './pages/rhodesian'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/index">
						<Index />
					</Route>
					<Route path="/rhodesian">
						<RhodesianInfoPage/>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
