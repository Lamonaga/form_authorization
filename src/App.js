import './App.css';
import Join from "./page/Join";
import Login from './page/Login'
import {
	Route,
	Routes,
	Link
} from "react-router-dom";
import {useSelector} from "react-redux";


function App() {
	const data = useSelector(state => state.regUser)
	console.log(data)

	return (<div className='App'>

		{data.statusReg ? (<div>login yes</div>) : <>	<div className='link_auth'>
			<Link to='/join'><button className='btn_auth'>Join</button></Link>
			<Link to='/login'><button className='btn_auth'>Login</button></Link>
		</div>
			<Routes>
				<Route path='/join' element={<Join/>}/>
				<Route path='/login' element={<Login/>}/>
			</Routes></>}
	</div>);

}

export default App;
