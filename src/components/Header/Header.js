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






export default function Header() {
	

	return (
		<AppBar position="static">
        	<Toolbar className="d-flex justify-content-between">
				<Avatar alt="piglet is making a booboo" src={piglet} />
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