import './App.css';
import Join from "./page/Join";
import Login from './page/Login'
import {
	Route,
	Routes,
	Link
} from "react-router-dom";


function App() {


	return (<div className='App'>
	<div className='link_auth'>
		<Link to='/join'><button className='btn_auth'>Join</button></Link>
		<Link to='/login'><button className='btn_auth'>Login</button></Link>
	</div>
		<Routes>
			<Route path='/join' element={<Join/>}/>
			<Route path='/login' element={<Login/>}/>
		</Routes>

	</div>);
}

export default App;
