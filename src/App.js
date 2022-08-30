import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Bookmarks from './pages/Bookmarks/components/Bookmarks/Bookmarks';
import Home from './pages/Home/components/Home/Home';
import Movies from './pages/Movies/components/Movies/Movies';
import Series from './pages/Series/components/Series/Series';
import SignIn from './pages/Sign/components/Sign-In/SignIn';
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Navigate to="/sign" replace />} />
				<Route path="/sign" element={<SignIn />} />
				<Route path="/home" element={<Home />} />
				<Route path="/home/movies" element={<Movies />} />
				<Route path="/home/series" element={<Series />} />
				<Route path="/home/bookmarks" element={<Bookmarks />} />
			</Routes>
		</div>
	);
}

export default App;
