import piglet from './piglet.png';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';




export default function Header() {
	
	const history = useHistory();
	const [searchValue, setSearchValue] = useState('');
	
	const navigateToDo = (event) => {
		event.preventDefault();
		history.push(`/todo?search=${searchValue}`);
	}

	return (
		<AppBar position="static" className="header">
        	<Toolbar className="d-flex justify-content-between">
				<div className="d-flex">
					<Avatar alt="piglet is making a booboo" src={piglet} />
					<form className="h-100 d-flex" onSubmit={navigateToDo}>
						<div className="search-wrapper ml-4">
							<div className="search-icon">
								<SearchIcon />
							</div>
								<InputBase	
									value={searchValue}
									onChange={(event) => setSearchValue(event.target.value)}
									className="h-100"							
									placeholder="Search…"
								/>
						</div>
						<Button type="submit" variant="contained" color="primary">
							Search
						</Button>
					</form>
				</div>
				
				<nav className="navbar navbar-expand-lg navbar-light">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active text-white" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-white" to="/todo">
								Todo
							</Link>
						</li>
					</ul>
				</nav>
			</Toolbar>
		</AppBar>
	)
}