import './App.css';
import Icons from './components/Icons/Icons';
import SignIn from './components/Sign-In/SignIn';

function App() {
	return (
		<div className="App">
			<div className="logoContainer">
				<Icons name="logo" color="#d87d4a" width="40px" height="40px" />
			</div>

			<SignIn />
		</div>
	);
}

export default App;
