import piglet from './piglet.png';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));


const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},
	menuButton: {
	  marginRight: theme.spacing(2),
	},
	title: {
	  flexGrow: 1,
	},
  }));


export default function Header() {
	const classes = useStyles();

	return (
		<header className="navbar bg-light d-flex justify-content-between">
		<div className={classes.root}>
			
        
      <AppBar position="static">
        <Toolbar>
		<Avatar alt="piglet is making a booboo" src={piglet} />

           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> 
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
		  MIRI MEIMOON 
          </Typography>
          <Button color="inherit">Home</Button>
		  <Button color="inherit">About</Button>
		  <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
		</header>
	)
}