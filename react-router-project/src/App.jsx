import './App.css';
import BrowserRouter from './BrowserRouter.jsx';
import Route from './Route.jsx';
import Blog from './Blog.jsx';
import NavBar from './NavBar.jsx';

function App() {
	return (
		<>
			<h1>App</h1>
			<BrowserRouter>
				<NavBar />
				<h2>Browser Router</h2>
				<Route path="/home">
					<h3>Route 1</h3>
				</Route>
				<Route path="/blog">
					<h3>Route 2</h3>
					<Blog />
				</Route>
				<Route path="/about">
					<h3>Route 3</h3>
					<p>About page</p>
				</Route>
			</BrowserRouter>
		</>
	);
}

export default App;
