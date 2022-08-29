import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/components/Home/Home';
import SignIn from './pages/Sign/components/Sign-In/SignIn';
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Navigate to="/sign" replace />} />
				<Route path="/home" element={<Home />} />
				<Route path="/sign" element={<SignIn />} />
			</Routes>
		</div>
	);
}

export default App;
