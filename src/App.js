import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import TodoList from "./components/TodoList";
import Search from "./components/Search";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="h-100 d-flex flex-column justify-content-between">
		<Header />
		
		<div className="container mt-3">
			<div className="row justify-content-center">
				<div className="col-4">
					<Switch>
						<Route path="/" exact>
							<Login />
						</Route>
						<Route path="/todo" exact>
							<TodoList />
						</Route>
						<Route path="/search" exact>
							<Search />
						</Route>
					</Switch>
					
				</div>
			</div>
		</div>	
		
		<Footer />		
	</div>  
  );
}

export default App;
